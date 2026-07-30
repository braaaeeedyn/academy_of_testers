package com.aot.sat.controller;

import com.aot.sat.dto.AdaptiveDtos.AnswerResult;
import com.aot.sat.dto.AdaptiveDtos.DashboardData;
import com.aot.sat.dto.AdaptiveDtos.DiagnosticAnswerResult;
import com.aot.sat.dto.AdaptiveDtos.DiagnosticStep;
import com.aot.sat.dto.AdaptiveDtos.RepairRequest;
import com.aot.sat.dto.AdaptiveDtos.SessionStep;
import com.aot.sat.dto.AdaptiveDtos.SessionSummary;
import com.aot.sat.dto.AdaptiveDtos.SkillCatalog;
import com.aot.sat.dto.AdaptiveDtos.SkillWeight;
import com.aot.sat.dto.AdaptiveDtos.Status;
import com.aot.sat.dto.AdaptiveDtos.SubmitAnswer;
import com.aot.sat.dto.AdaptiveDtos.UserPrefs;
import com.aot.sat.service.AdaptiveSessionService;
import com.aot.sat.service.DiagnosticService;
import com.aot.sat.service.MasteryService;
import com.aot.sat.service.SatUserPrefsService;
import com.aot.sat.service.StreakService;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/** SAT adaptive engine API. All endpoints require authentication (see SecurityConfig). */
@RestController
@RequestMapping("/api/sat/adaptive")
public class SatAdaptiveController {

  private final DiagnosticService diagnosticService;
  private final AdaptiveSessionService sessionService;
  private final MasteryService masteryService;
  private final StreakService streakService;
  private final SatUserPrefsService prefsService;

  public SatAdaptiveController(
      DiagnosticService diagnosticService,
      AdaptiveSessionService sessionService,
      MasteryService masteryService,
      StreakService streakService,
      SatUserPrefsService prefsService) {
    this.diagnosticService = diagnosticService;
    this.sessionService = sessionService;
    this.masteryService = masteryService;
    this.streakService = streakService;
    this.prefsService = prefsService;
  }

  private static Long uid(Authentication auth) {
    return (Long) auth.getPrincipal();
  }

  @GetMapping("/status")
  public ResponseEntity<Status> status(Authentication auth) {
    Long userId = uid(auth);
    boolean complete = diagnosticService.isComplete(userId);
    Long openSession = sessionService.openSessionId(userId);
    return ResponseEntity.ok(
        new Status(
            complete,
            diagnosticService.answeredCount(userId),
            diagnosticService.total(),
            openSession != null,
            openSession));
  }

  @GetMapping("/mastery")
  public ResponseEntity<List<SkillWeight>> mastery(Authentication auth) {
    return ResponseEntity.ok(masteryService.mastery(uid(auth)));
  }

  /**
   * The full results board: mastery, recommended focus, and the streak calendar for one month.
   * The "current day" is resolved server-side in UTC so the streak boundary is universal and not
   * subject to the device clock or time zone.
   */
  @GetMapping("/dashboard")
  public ResponseEntity<DashboardData> dashboard(Authentication auth, @RequestParam String month) {
    Long userId = uid(auth);
    LocalDate today = LocalDate.now(ZoneOffset.UTC);
    return ResponseEntity.ok(
        new DashboardData(
            diagnosticService.isComplete(userId),
            masteryService.mastery(userId),
            masteryService.recommended(userId, 3),
            streakService.compute(userId, YearMonth.parse(month), today)));
  }

  /** Spends a repair token to restore one past missed day (requires today already practiced). */
  @PostMapping("/streak/repair")
  public ResponseEntity<Void> repairStreak(Authentication auth, @RequestBody RepairRequest body) {
    LocalDate today = LocalDate.now(ZoneOffset.UTC);
    streakService.repair(uid(auth), LocalDate.parse(body.date()), today);
    return ResponseEntity.ok().build();
  }

  /** User-linked dashboard preferences: SAT test date and weekly practice-day goal. */
  @GetMapping("/prefs")
  public ResponseEntity<UserPrefs> getPrefs(Authentication auth) {
    return ResponseEntity.ok(prefsService.get(uid(auth)));
  }

  @PutMapping("/prefs")
  public ResponseEntity<UserPrefs> putPrefs(Authentication auth, @RequestBody UserPrefs body) {
    return ResponseEntity.ok(prefsService.save(uid(auth), body));
  }

  @PostMapping("/diagnostic")
  public ResponseEntity<DiagnosticStep> startDiagnostic(Authentication auth) {
    return ResponseEntity.ok(diagnosticService.start(uid(auth)));
  }

  @PostMapping("/diagnostic/answer")
  public ResponseEntity<DiagnosticAnswerResult> answerDiagnostic(
      Authentication auth, @RequestBody SubmitAnswer body) {
    return ResponseEntity.ok(
        diagnosticService.answer(uid(auth), body.questionId(), body.selectedIndex()));
  }

  /** Active-question counts per skill/difficulty, for building a custom practice run. */
  @GetMapping("/catalog")
  public ResponseEntity<List<SkillCatalog>> catalog(Authentication auth) {
    uid(auth);
    return ResponseEntity.ok(sessionService.catalog());
  }

  @PostMapping("/session")
  public ResponseEntity<?> startSession(
      Authentication auth,
      @RequestParam(required = false) Integer length,
      @RequestParam(required = false) String focusSkillId,
      @RequestParam(required = false) List<String> topics,
      @RequestParam(required = false) String difficulty) {
    Long userId = uid(auth);
    if (!diagnosticService.isComplete(userId)) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("code", "DIAGNOSTIC_REQUIRED"));
    }
    return ResponseEntity.ok(
        sessionService.startOrResume(userId, length, focusSkillId, topics, difficulty));
  }

  @GetMapping("/session/current")
  public ResponseEntity<SessionStep> currentSession(Authentication auth) {
    return ResponseEntity.ok(sessionService.current(uid(auth)));
  }

  @PostMapping("/session/{id}/answer")
  public ResponseEntity<AnswerResult> answerSession(
      Authentication auth, @PathVariable Long id, @RequestBody SubmitAnswer body) {
    return ResponseEntity.ok(
        sessionService.answer(
            uid(auth), id, body.questionId(), body.selectedIndex(), body.msElapsed()));
  }

  @GetMapping("/session/{id}/summary")
  public ResponseEntity<SessionSummary> sessionSummary(Authentication auth, @PathVariable Long id) {
    return ResponseEntity.ok(sessionService.summary(uid(auth), id));
  }

  /** Ends the session early, grading on questions already answered; returns updated mastery. */
  @PostMapping("/session/{id}/end")
  public ResponseEntity<List<SkillWeight>> endSession(Authentication auth, @PathVariable Long id) {
    return ResponseEntity.ok(sessionService.endSession(uid(auth), id));
  }
}

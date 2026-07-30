package com.aot.sat.service;

import com.aot.exception.ResourceNotFoundException;
import com.aot.sat.dto.AdaptiveDtos.AdaptiveQuestion;
import com.aot.sat.dto.AdaptiveDtos.AnswerResult;
import com.aot.sat.dto.AdaptiveDtos.SessionStep;
import com.aot.sat.dto.AdaptiveDtos.SessionSummary;
import com.aot.sat.dto.AdaptiveDtos.SkillCatalog;
import com.aot.sat.dto.AdaptiveDtos.SkillWeight;
import com.aot.sat.engine.AdaptiveConstants;
import com.aot.sat.engine.BayesianKnowledgeTracer;
import com.aot.sat.engine.ItemResponseTheory;
import com.aot.sat.engine.PrerequisitePropagator;
import com.aot.sat.engine.QuestionSelector;
import com.aot.sat.engine.QuestionSelector.Candidate;
import com.aot.sat.entity.SatQuestion;
import com.aot.sat.entity.SatResponse;
import com.aot.sat.entity.SatSession;
import com.aot.sat.entity.SatSkill;
import com.aot.sat.entity.SatSkillPrerequisite;
import com.aot.sat.entity.SatSkillWeight;
import com.aot.sat.repository.SatQuestionRepository;
import com.aot.sat.repository.SatResponseRepository;
import com.aot.sat.repository.SatSessionRepository;
import com.aot.sat.repository.SatSkillPrerequisiteRepository;
import com.aot.sat.repository.SatSkillRepository;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Adaptive practice sessions: select, grade, update the weight vector (§4.4, §4.5). */
@Service
public class AdaptiveSessionService {

  private final SatQuestionRepository questionRepo;
  private final SatSessionRepository sessionRepo;
  private final SatResponseRepository responseRepo;
  private final SatSkillRepository skillRepo;
  private final SatSkillPrerequisiteRepository prereqRepo;
  private final MasteryService masteryService;
  private final QuestionSupport support;
  private final Random rng = new Random();

  public AdaptiveSessionService(
      SatQuestionRepository questionRepo,
      SatSessionRepository sessionRepo,
      SatResponseRepository responseRepo,
      SatSkillRepository skillRepo,
      SatSkillPrerequisiteRepository prereqRepo,
      MasteryService masteryService,
      QuestionSupport support) {
    this.questionRepo = questionRepo;
    this.sessionRepo = sessionRepo;
    this.responseRepo = responseRepo;
    this.skillRepo = skillRepo;
    this.prereqRepo = prereqRepo;
    this.masteryService = masteryService;
    this.support = support;
  }

  private Map<String, SatSkill> skillMap() {
    Map<String, SatSkill> skills = new LinkedHashMap<>();
    skillRepo.findAll().forEach(s -> skills.put(s.getId(), s));
    return skills;
  }

  /** All skills with active-question counts by difficulty, for the custom practice builder. */
  public List<SkillCatalog> catalog() {
    Map<String, SatSkill> skills = skillMap();
    Map<String, int[]> counts = new HashMap<>(); // skillId -> [easy, medium, hard]
    for (SatQuestion q : questionRepo.findByActiveTrue()) {
      int[] c = counts.computeIfAbsent(q.getSkillId(), k -> new int[3]);
      switch (q.getDifficulty() == null ? "" : q.getDifficulty().toLowerCase()) {
        case "easy" -> c[0]++;
        case "medium" -> c[1]++;
        case "hard" -> c[2]++;
        default -> {}
      }
    }
    List<SkillCatalog> out = new ArrayList<>();
    for (SatSkill s : skills.values()) {
      int[] c = counts.getOrDefault(s.getId(), new int[3]);
      out.add(
          new SkillCatalog(
              s.getId(), s.getName(), s.getDisplayOrder(), c[0], c[1], c[2], c[0] + c[1] + c[2]));
    }
    out.sort(Comparator.comparingInt(SkillCatalog::displayOrder));
    return out;
  }

  /** Builds the ordered, shuffled question queue for a custom practice run. */
  private String buildQueue(List<String> topics, String difficulty, Integer length) {
    Set<String> topicSet = new HashSet<>(topics);
    boolean anyDiff =
        difficulty == null || difficulty.isBlank() || difficulty.equalsIgnoreCase("any");
    List<String> pool = new ArrayList<>();
    for (SatQuestion q : questionRepo.findByActiveTrue()) {
      if (!topicSet.contains(q.getSkillId())) continue;
      if (!anyDiff && !difficulty.equalsIgnoreCase(q.getDifficulty())) continue;
      pool.add(q.getId());
    }
    if (pool.isEmpty()) {
      throw new IllegalArgumentException("No questions match those topics and difficulty.");
    }
    Collections.shuffle(pool, rng);
    int n = length != null && length > 0 ? Math.min(length, pool.size()) : pool.size();
    return String.join(",", pool.subList(0, n));
  }

  @Transactional
  public SessionStep startOrResume(
      Long userId, Integer length, String focusSkillId, List<String> topics, String difficulty) {
    SatSession session = sessionRepo.findByUserIdAndCompletedAtIsNull(userId).orElse(null);
    if (session == null) {
      boolean custom = topics != null && !topics.isEmpty();
      if (custom) {
        String queue = buildQueue(topics, difficulty, length);
        int qlen = queue.split(",").length;
        SatSession s = new SatSession(userId, qlen);
        s.setQuestionQueue(queue);
        session = sessionRepo.save(s);
      } else {
        int len =
            length != null && length > 0 ? length : AdaptiveConstants.DEFAULT_SESSION_LENGTH;
        SatSession s = new SatSession(userId, len);
        if (focusSkillId != null && !focusSkillId.isBlank()) {
          s.setFocusSkillId(focusSkillId);
        }
        session = sessionRepo.save(s);
      }
    }

    if (session.getPendingQuestionId() == null) {
      SatQuestion next = selectNext(userId, session);
      if (next == null) throw new IllegalStateException("No questions available.");
      session.setPendingQuestionId(next.getId());
      sessionRepo.save(session);
    }
    SatQuestion pending =
        questionRepo
            .findById(session.getPendingQuestionId())
            .orElseThrow(() -> new ResourceNotFoundException("Pending question missing."));
    return new SessionStep(
        session.getId(),
        support.toClient(pending, skillMap()),
        session.getQuestionsAnswered() + 1,
        session.getTargetLength());
  }

  /** The open session's id, or null if none. */
  public Long openSessionId(Long userId) {
    return sessionRepo.findByUserIdAndCompletedAtIsNull(userId).map(SatSession::getId).orElse(null);
  }

  public SessionStep current(Long userId) {
    SatSession session =
        sessionRepo
            .findByUserIdAndCompletedAtIsNull(userId)
            .orElseThrow(() -> new ResourceNotFoundException("No open session."));
    SatQuestion pending =
        questionRepo
            .findById(session.getPendingQuestionId())
            .orElseThrow(() -> new ResourceNotFoundException("Pending question missing."));
    return new SessionStep(
        session.getId(),
        support.toClient(pending, skillMap()),
        session.getQuestionsAnswered() + 1,
        session.getTargetLength());
  }

  @Transactional
  public AnswerResult answer(
      Long userId, Long sessionId, String questionId, Integer selectedIndex, Integer msElapsed) {
    SatSession session =
        sessionRepo
            .findByIdAndUserId(sessionId, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Session not found."));
    if (session.isComplete()) {
      throw new IllegalArgumentException("Session already complete.");
    }
    if (!questionId.equals(session.getPendingQuestionId())) {
      throw new IllegalArgumentException("Not the pending question.");
    }
    // Idempotency guard: a retried POST must not run BKT twice.
    if (responseRepo.existsBySessionIdAndQuestionId(sessionId, questionId)) {
      throw new IllegalArgumentException("Question already answered in this session.");
    }
    SatQuestion q =
        questionRepo
            .findById(questionId)
            .orElseThrow(() -> new ResourceNotFoundException("Question not found."));

    boolean correct = selectedIndex != null && selectedIndex.equals(q.getCorrectIndex());

    // 1-3: load + decay the answered skill and its prerequisites, record w_before
    SatSkillWeight row = masteryService.loadRow(userId, q.getSkillId());
    double wBefore = MasteryService.decayed(row);
    double theta = ItemResponseTheory.theta(wBefore);

    // 4-5: BKT posterior + learning transition, damped so mastery changes more gradually.
    // Gains use a smaller rate than losses, so mastery is easier to lose than to earn.
    double rawAfter = BayesianKnowledgeTracer.update(wBefore, correct, AdaptiveConstants.P_GUESS_MC);
    double rawDelta = rawAfter - wBefore;
    double rate =
        rawDelta >= 0 ? AdaptiveConstants.MASTERY_GAIN_RATE : AdaptiveConstants.MASTERY_LOSS_RATE;
    double wAfter = wBefore + rawDelta * rate;

    // 6: on a miss, propagate a depth-1 penalty to prerequisites
    if (!correct) {
      double delta = wBefore - wAfter;
      for (SatSkillPrerequisite edge : prereqRepo.findBySkillId(q.getSkillId())) {
        SatSkillWeight pRow = masteryService.loadRow(userId, edge.getPrerequisiteId());
        double pBefore = MasteryService.decayed(pRow);
        double pAfter = PrerequisitePropagator.penalize(pBefore, delta, edge.getStrength());
        masteryService.persist(pRow, pAfter, false, false);
      }
    }

    // 7-8: persist the answered skill weight (clamp handled in persist)
    masteryService.persist(row, wAfter, correct, true);

    // 9: audit row
    SatResponse audit = new SatResponse();
    audit.setSessionId(sessionId);
    audit.setUserId(userId);
    audit.setQuestionId(questionId);
    audit.setSelectedIndex(selectedIndex);
    audit.setCorrect(correct);
    audit.setWeightBefore(wBefore);
    audit.setWeightAfter(wAfter);
    audit.setThetaAtSelection(theta);
    audit.setMsElapsed(msElapsed);
    audit.setAnsweredAt(LocalDateTime.now());
    responseRepo.save(audit);

    questionRepo.recordAttempt(questionId, correct ? 1 : 0);

    // advance the session
    session.setQuestionsAnswered(session.getQuestionsAnswered() + 1);
    if (correct) session.setCorrectCount(session.getCorrectCount() + 1);

    boolean complete = session.getQuestionsAnswered() >= session.getTargetLength();
    AdaptiveQuestion nextDto = null;
    if (complete) {
      session.setCompletedAt(LocalDateTime.now());
      session.setPendingQuestionId(null);
    } else {
      // 10: reselect against the updated vector
      SatQuestion next = selectNext(userId, session);
      if (next == null) {
        session.setCompletedAt(LocalDateTime.now());
        session.setPendingQuestionId(null);
        complete = true;
      } else {
        session.setPendingQuestionId(next.getId());
        nextDto = support.toClient(next, skillMap());
      }
    }
    sessionRepo.save(session);

    return new AnswerResult(
        correct,
        q.getCorrectIndex(),
        q.getExplanation(),
        masteryService.mastery(userId),
        nextDto,
        session.getQuestionsAnswered() + (complete ? 0 : 1),
        session.getTargetLength(),
        complete);
  }

  /**
   * Ends an open session immediately, grading on the questions already answered. Weights are left
   * as-is (each answered question already updated them); returns the current mastery vector.
   */
  @Transactional
  public List<SkillWeight> endSession(Long userId, Long sessionId) {
    SatSession session =
        sessionRepo
            .findByIdAndUserId(sessionId, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Session not found."));
    if (!session.isComplete()) {
      session.setCompletedAt(LocalDateTime.now());
      session.setPendingQuestionId(null);
      sessionRepo.save(session);
    }
    return masteryService.mastery(userId);
  }

  public SessionSummary summary(Long userId, Long sessionId) {
    SatSession session =
        sessionRepo
            .findByIdAndUserId(sessionId, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Session not found."));
    return new SessionSummary(
        session.getId(),
        session.getQuestionsAnswered(),
        session.getCorrectCount(),
        masteryService.mastery(userId));
  }

  /** Builds the candidate pool and picks the next question (§4.4). */
  private SatQuestion selectNext(Long userId, SatSession session) {
    // Custom practice: serve the pre-built queue in order, ignoring adaptive selection.
    String queue = session.getQuestionQueue();
    if (queue != null && !queue.isBlank()) {
      String[] ids = queue.split(",");
      int idx = session.getQuestionsAnswered();
      if (idx >= ids.length) return null;
      return questionRepo.findById(ids[idx]).orElse(null);
    }

    Set<String> exclude =
        new HashSet<>(
            responseRepo.recentQuestionIds(
                userId, PageRequest.of(0, AdaptiveConstants.RECENT_EXCLUSION)));
    if (session.getPendingQuestionId() != null) exclude.add(session.getPendingQuestionId());

    Map<String, Double> weights = masteryService.currentWeightMap(userId);
    Map<String, SatQuestion> byId = new HashMap<>();
    List<Candidate> candidates = new java.util.ArrayList<>();
    List<Candidate> focused = new java.util.ArrayList<>();
    String focus = session.getFocusSkillId();
    for (SatQuestion q : questionRepo.findByActiveTrue()) {
      if (exclude.contains(q.getId())) continue;
      byId.put(q.getId(), q);
      Candidate c =
          new Candidate(q.getId(), q.getSkillId(), q.getIrtA(), q.getIrtB(), q.getIrtC(), -1.0);
      candidates.add(c);
      if (focus != null && focus.equals(q.getSkillId())) focused.add(c);
    }
    // Focused sessions draw from the target skill; fall back to the full pool once it's exhausted.
    List<Candidate> pool = !focused.isEmpty() ? focused : candidates;
    Candidate picked = QuestionSelector.select(pool, weights, rng);
    return picked == null ? null : byId.get(picked.questionId());
  }
}

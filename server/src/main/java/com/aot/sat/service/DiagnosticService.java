package com.aot.sat.service;

import com.aot.exception.ResourceNotFoundException;
import com.aot.sat.dto.AdaptiveDtos.DiagnosticAnswerResult;
import com.aot.sat.dto.AdaptiveDtos.DiagnosticStep;
import com.aot.sat.engine.AdaptiveConstants;
import com.aot.sat.engine.DiagnosticInitializer;
import com.aot.sat.entity.SatDiagnosticAttempt;
import com.aot.sat.entity.SatDiagnosticResponse;
import com.aot.sat.entity.SatQuestion;
import com.aot.sat.entity.SatSkill;
import com.aot.sat.repository.SatDiagnosticAttemptRepository;
import com.aot.sat.repository.SatDiagnosticResponseRepository;
import com.aot.sat.repository.SatQuestionRepository;
import com.aot.sat.repository.SatSkillRepository;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** The one-time diagnostic: serve the 24 items in a fixed order, then init the weight vector. */
@Service
public class DiagnosticService {

  private static final Map<String, Integer> DIFF_ORDER = Map.of("easy", 0, "medium", 1, "hard", 2);

  private final SatQuestionRepository questionRepo;
  private final SatDiagnosticAttemptRepository attemptRepo;
  private final SatDiagnosticResponseRepository responseRepo;
  private final SatSkillRepository skillRepo;
  private final QuestionSupport support;
  private final MasteryService masteryService;

  public DiagnosticService(
      SatQuestionRepository questionRepo,
      SatDiagnosticAttemptRepository attemptRepo,
      SatDiagnosticResponseRepository responseRepo,
      SatSkillRepository skillRepo,
      QuestionSupport support,
      MasteryService masteryService) {
    this.questionRepo = questionRepo;
    this.attemptRepo = attemptRepo;
    this.responseRepo = responseRepo;
    this.skillRepo = skillRepo;
    this.support = support;
    this.masteryService = masteryService;
  }

  /** The 24 diagnostic questions in a stable order: by skill display order, then difficulty. */
  private List<SatQuestion> orderedDiagnostic() {
    Map<String, SatSkill> skills = skillMap();
    return questionRepo.findByDiagnosticTrue().stream()
        .sorted(
            Comparator.<SatQuestion>comparingInt(
                    q -> {
                      SatSkill s = skills.get(q.getSkillId());
                      return s != null ? s.getDisplayOrder() : 99;
                    })
                .thenComparingInt(q -> DIFF_ORDER.getOrDefault(q.getDifficulty(), 9)))
        .toList();
  }

  private Map<String, SatSkill> skillMap() {
    Map<String, SatSkill> skills = new LinkedHashMap<>();
    skillRepo.findAll().forEach(s -> skills.put(s.getId(), s));
    return skills;
  }

  public boolean isComplete(Long userId) {
    return attemptRepo.findByUserId(userId).map(SatDiagnosticAttempt::isComplete).orElse(false);
  }

  public int answeredCount(Long userId) {
    return attemptRepo
        .findByUserId(userId)
        .map(a -> responseRepo.findByAttemptId(a.getId()).size())
        .orElse(0);
  }

  public int total() {
    return AdaptiveConstants.DIAGNOSTIC_LENGTH;
  }

  @Transactional
  public DiagnosticStep start(Long userId) {
    SatDiagnosticAttempt attempt =
        attemptRepo
            .findByUserId(userId)
            .orElseGet(() -> attemptRepo.save(new SatDiagnosticAttempt(userId)));
    return nextStep(attempt);
  }

  private DiagnosticStep nextStep(SatDiagnosticAttempt attempt) {
    Set<String> answered =
        responseRepo.findByAttemptId(attempt.getId()).stream()
            .map(SatDiagnosticResponse::getQuestionId)
            .collect(Collectors.toSet());
    List<SatQuestion> ordered = orderedDiagnostic();
    Map<String, SatSkill> skills = skillMap();
    for (int i = 0; i < ordered.size(); i++) {
      SatQuestion q = ordered.get(i);
      if (!answered.contains(q.getId())) {
        return new DiagnosticStep(
            support.toClient(q, skills), answered.size() + 1, ordered.size(), false);
      }
    }
    return new DiagnosticStep(null, ordered.size(), ordered.size(), true);
  }

  @Transactional
  public DiagnosticAnswerResult answer(Long userId, String questionId, Integer selectedIndex) {
    SatDiagnosticAttempt attempt =
        attemptRepo
            .findByUserId(userId)
            .orElseThrow(() -> new IllegalArgumentException("Diagnostic not started."));
    if (attempt.isComplete()) {
      throw new IllegalArgumentException("Diagnostic already complete.");
    }
    SatQuestion q =
        questionRepo
            .findById(questionId)
            .orElseThrow(() -> new ResourceNotFoundException("Question not found."));
    if (!q.isDiagnostic()) {
      throw new IllegalArgumentException("Not a diagnostic question.");
    }
    if (selectedIndex == null || selectedIndex < 0 || selectedIndex > 3) {
      throw new IllegalArgumentException("selectedIndex must be 0-3.");
    }
    if (responseRepo.existsByAttemptIdAndQuestionId(attempt.getId(), questionId)) {
      throw new IllegalArgumentException("Question already answered.");
    }

    boolean correct = selectedIndex.equals(q.getCorrectIndex());
    responseRepo.save(
        new SatDiagnosticResponse(attempt.getId(), questionId, selectedIndex, correct));
    questionRepo.recordAttempt(questionId, correct ? 1 : 0);

    List<SatDiagnosticResponse> responses = responseRepo.findByAttemptId(attempt.getId());
    List<SatQuestion> ordered = orderedDiagnostic();
    boolean complete = responses.size() >= ordered.size();

    if (complete) {
      initializeWeights(userId, responses, ordered);
      attempt.setCompletedAt(java.time.LocalDateTime.now());
      attemptRepo.save(attempt);
    }

    DiagnosticStep step =
        complete
            ? new DiagnosticStep(null, ordered.size(), ordered.size(), true)
            : nextStep(attempt);

    return new DiagnosticAnswerResult(
        correct,
        q.getCorrectIndex(),
        q.getExplanation(),
        step.question(),
        step.questionNumber(),
        ordered.size(),
        complete,
        complete ? masteryService.mastery(userId) : List.of());
  }

  /** Computes w0 per skill from the 24 responses and writes the weight vector (§4.7). */
  private void initializeWeights(
      Long userId, List<SatDiagnosticResponse> responses, List<SatQuestion> ordered) {
    Map<String, SatQuestion> byId =
        ordered.stream().collect(Collectors.toMap(SatQuestion::getId, x -> x));
    // skill -> difficulty -> correct
    Map<String, Map<String, Boolean>> bySkill = new HashMap<>();
    for (SatDiagnosticResponse r : responses) {
      SatQuestion q = byId.get(r.getQuestionId());
      if (q == null) continue;
      bySkill
          .computeIfAbsent(q.getSkillId(), k -> new HashMap<>())
          .put(q.getDifficulty(), r.isCorrect());
    }
    Map<String, Double> weights = new HashMap<>();
    for (var e : bySkill.entrySet()) {
      Map<String, Boolean> d = e.getValue();
      weights.put(
          e.getKey(),
          DiagnosticInitializer.initialWeight(
              d.getOrDefault("easy", false),
              d.getOrDefault("medium", false),
              d.getOrDefault("hard", false)));
    }
    masteryService.initialize(userId, weights);
  }
}

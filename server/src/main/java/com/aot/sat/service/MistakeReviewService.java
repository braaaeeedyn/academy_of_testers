package com.aot.sat.service;

import com.aot.exception.ResourceNotFoundException;
import com.aot.sat.dto.AdaptiveDtos.AdaptiveQuestion;
import com.aot.sat.dto.AdaptiveDtos.ReviewResult;
import com.aot.sat.entity.SatQuestion;
import com.aot.sat.entity.SatSkill;
import com.aot.sat.repository.SatQuestionRepository;
import com.aot.sat.repository.SatResponseRepository;
import com.aot.sat.repository.SatSessionRepository;
import com.aot.sat.repository.SatSkillRepository;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Mistake Notebook re-attempts of SAT questions the student has already answered in a session.
 *
 * <p>Strictly read-only. A re-attempt happens with prior knowledge of the answer, so it must never
 * move skill weights, touch the streak, write an audit row, or count toward a question's attempt
 * statistics (that would contaminate the data used to recalibrate {@code irt_b}).
 */
@Service
@Transactional(readOnly = true)
public class MistakeReviewService {

  private final SatQuestionRepository questionRepo;
  private final SatResponseRepository responseRepo;
  private final SatSessionRepository sessionRepo;
  private final SatSkillRepository skillRepo;
  private final QuestionSupport support;

  public MistakeReviewService(
      SatQuestionRepository questionRepo,
      SatResponseRepository responseRepo,
      SatSessionRepository sessionRepo,
      SatSkillRepository skillRepo,
      QuestionSupport support) {
    this.questionRepo = questionRepo;
    this.responseRepo = responseRepo;
    this.sessionRepo = sessionRepo;
    this.skillRepo = skillRepo;
    this.support = support;
  }

  /** The answer-free question, if the user has answered it before in a session. */
  public AdaptiveQuestion question(Long userId, String questionId) {
    SatQuestion q = owned(userId, questionId);
    Map<String, SatSkill> skills = new LinkedHashMap<>();
    skillRepo.findAll().forEach(s -> skills.put(s.getId(), s));
    return support.toClient(q, skills);
  }

  /** Grades a re-attempt without recording anything. */
  public ReviewResult check(Long userId, String questionId, Integer selectedIndex) {
    SatQuestion q = owned(userId, questionId);
    boolean pending =
        sessionRepo
            .findByUserIdAndCompletedAtIsNull(userId)
            .map(s -> questionId.equals(s.getPendingQuestionId()))
            .orElse(false);
    if (pending) {
      throw new IllegalArgumentException("That question is pending in your open session.");
    }
    int correctIndex = q.getCorrectIndex();
    boolean correct = selectedIndex != null && selectedIndex == correctIndex;
    return new ReviewResult(correct, correctIndex, q.getExplanation());
  }

  private SatQuestion owned(Long userId, String questionId) {
    if (!responseRepo.existsByUserIdAndQuestionId(userId, questionId)) {
      throw new ResourceNotFoundException("Question not found.");
    }
    return questionRepo
        .findById(questionId)
        .orElseThrow(() -> new ResourceNotFoundException("Question not found."));
  }
}

package com.aot.controller;

import com.aot.dto.CardProgressDTO;
import com.aot.dto.RecordAttemptRequest;
import com.aot.entity.CardProgress;
import com.aot.entity.Subject;
import com.aot.entity.User;
import com.aot.exception.ResourceNotFoundException;
import com.aot.repository.CardProgressRepository;
import com.aot.repository.FlashcardRepository;
import com.aot.repository.SubjectRepository;
import com.aot.repository.UserRepository;
import jakarta.validation.Valid;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Mastery tracking for training mode and unit practice. Keys are 'user:<flashcardId>',
 * 'premade:<id>', or 'practice:<subjectId>:<questionId>' (unit-practice questions, whose ids repeat
 * across subjects, so the subject is baked into the key to keep rows distinct per class).
 */
@RestController
@RequestMapping("/api/progress")
public class CardProgressController {

  private static final Pattern USER_KEY = Pattern.compile("^user:(\\d{1,18})$");
  private static final Pattern PREMADE_KEY =
      Pattern.compile("^premade:[a-z0-9][a-z0-9._-]{0,120}$");
  private static final Pattern PRACTICE_KEY =
      Pattern.compile("^practice:(\\d{1,18}):[A-Za-z0-9][A-Za-z0-9._-]{0,120}$");

  private final CardProgressRepository progressRepository;
  private final FlashcardRepository flashcardRepository;
  private final SubjectRepository subjectRepository;
  private final UserRepository userRepository;

  public CardProgressController(
      CardProgressRepository progressRepository,
      FlashcardRepository flashcardRepository,
      SubjectRepository subjectRepository,
      UserRepository userRepository) {
    this.progressRepository = progressRepository;
    this.flashcardRepository = flashcardRepository;
    this.subjectRepository = subjectRepository;
    this.userRepository = userRepository;
  }

  @GetMapping
  @Transactional
  public ResponseEntity<List<CardProgressDTO>> listBySubject(
      Authentication authentication, @RequestParam Long subjectId) {
    Long userId = (Long) authentication.getPrincipal();
    LocalDateTime now = LocalDateTime.now();
    List<CardProgress> rows = progressRepository.findByUserIdAndSubjectId(userId, subjectId);
    // Age mastery for questions left untouched, then persist just the rows that actually changed so
    // the tier the student sees (and any later attempt builds on) reflects the forgetting curve.
    List<CardProgress> decayed = new ArrayList<>();
    for (CardProgress row : rows) {
      if (row.applyDecay(now)) {
        decayed.add(row);
      }
    }
    if (!decayed.isEmpty()) {
      progressRepository.saveAll(decayed);
    }
    List<CardProgressDTO> progress = rows.stream().map(CardProgressDTO::from).toList();
    return ResponseEntity.ok(progress);
  }

  @PostMapping
  @Transactional
  public ResponseEntity<CardProgressDTO> recordAttempt(
      Authentication authentication, @Valid @RequestBody RecordAttemptRequest request) {
    Long userId = (Long) authentication.getPrincipal();
    String cardKey = request.getCardKey().trim();
    validateCardKey(cardKey, userId, request.getSubjectId());

    CardProgress progress =
        progressRepository
            .findByUserIdAndCardKey(userId, cardKey)
            .orElseGet(
                () -> {
                  User user =
                      userRepository
                          .findById(userId)
                          .orElseThrow(() -> new ResourceNotFoundException("User not found"));
                  Subject subject =
                      subjectRepository
                          .findById(request.getSubjectId())
                          .orElseThrow(() -> new ResourceNotFoundException("Subject not found"));
                  CardProgress created = new CardProgress();
                  created.setUser(user);
                  created.setSubject(subject);
                  created.setCardKey(cardKey);
                  return created;
                });

    // Settle any pending decay before folding in this attempt, so a card that has slipped can't be
    // snapped back to its old tier by a single correct answer.
    progress.applyDecay(LocalDateTime.now());
    progress.record(request.getCorrect());
    return ResponseEntity.ok(CardProgressDTO.from(progressRepository.save(progress)));
  }

  /** Clears mastery for the whole subject so the user can start a fresh run. */
  @DeleteMapping
  @Transactional
  public ResponseEntity<Void> reset(Authentication authentication, @RequestParam Long subjectId) {
    Long userId = (Long) authentication.getPrincipal();
    progressRepository.deleteByUserIdAndSubjectId(userId, subjectId);
    return ResponseEntity.noContent().build();
  }

  /**
   * Keys are client-supplied, so they're constrained to the two known shapes. A 'user:' key must
   * additionally name a flashcard the caller owns in this subject, otherwise progress rows could be
   * created against someone else's card.
   */
  private void validateCardKey(String cardKey, Long userId, Long subjectId) {
    var userMatch = USER_KEY.matcher(cardKey);
    if (userMatch.matches()) {
      Long flashcardId = Long.parseLong(userMatch.group(1));
      var card =
          flashcardRepository
              .findByIdAndUserId(flashcardId, userId)
              .orElseThrow(() -> new ResourceNotFoundException("Flashcard not found"));
      if (!card.getSubject().getId().equals(subjectId)) {
        throw new IllegalArgumentException("Flashcard does not belong to this subject.");
      }
      return;
    }
    var practiceMatch = PRACTICE_KEY.matcher(cardKey);
    if (practiceMatch.matches()) {
      if (!Long.valueOf(practiceMatch.group(1)).equals(subjectId)) {
        throw new IllegalArgumentException("Practice key does not match this subject.");
      }
      return;
    }
    if (!PREMADE_KEY.matcher(cardKey).matches()) {
      throw new IllegalArgumentException("Invalid card key.");
    }
  }
}

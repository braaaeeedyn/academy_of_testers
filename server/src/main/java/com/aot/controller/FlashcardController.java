package com.aot.controller;

import com.aot.dto.FlashcardDTO;
import com.aot.dto.FlashcardRequest;
import com.aot.dto.FlashcardUpdateRequest;
import com.aot.entity.Flashcard;
import com.aot.entity.Subject;
import com.aot.entity.User;
import com.aot.exception.ResourceNotFoundException;
import com.aot.repository.FlashcardRepository;
import com.aot.repository.SubjectRepository;
import com.aot.repository.UserRepository;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/flashcards")
public class FlashcardController {

  /** Guards against a single account filling the table. */
  private static final long MAX_CARDS_PER_USER = 500;

  private final FlashcardRepository flashcardRepository;
  private final SubjectRepository subjectRepository;
  private final UserRepository userRepository;

  public FlashcardController(
      FlashcardRepository flashcardRepository,
      SubjectRepository subjectRepository,
      UserRepository userRepository) {
    this.flashcardRepository = flashcardRepository;
    this.subjectRepository = subjectRepository;
    this.userRepository = userRepository;
  }

  @GetMapping
  public ResponseEntity<List<FlashcardDTO>> listBySubject(
      Authentication authentication, @RequestParam Long subjectId) {
    Long userId = (Long) authentication.getPrincipal();
    List<FlashcardDTO> cards =
        flashcardRepository.findByUserIdAndSubjectIdOrderByCreatedAtDesc(userId, subjectId).stream()
            .map(FlashcardDTO::from)
            .toList();
    return ResponseEntity.ok(cards);
  }

  @PostMapping
  public ResponseEntity<FlashcardDTO> create(
      Authentication authentication, @Valid @RequestBody FlashcardRequest request) {
    Long userId = (Long) authentication.getPrincipal();

    if (flashcardRepository.countByUserId(userId) >= MAX_CARDS_PER_USER) {
      throw new IllegalArgumentException(
          "You have reached the limit of " + MAX_CARDS_PER_USER + " flashcards.");
    }

    User user =
        userRepository
            .findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    Subject subject =
        subjectRepository
            .findById(request.getSubjectId())
            .orElseThrow(() -> new ResourceNotFoundException("Subject not found"));

    Flashcard card = new Flashcard();
    card.setUser(user);
    card.setSubject(subject);
    card.setQuestion(request.getQuestion().trim());
    card.setAnswer(request.getAnswer().trim());

    Flashcard saved = flashcardRepository.save(card);
    return ResponseEntity.status(HttpStatus.CREATED).body(FlashcardDTO.from(saved));
  }

  @PutMapping("/{id}")
  public ResponseEntity<FlashcardDTO> update(
      Authentication authentication,
      @PathVariable Long id,
      @Valid @RequestBody FlashcardUpdateRequest request) {
    Long userId = (Long) authentication.getPrincipal();
    Flashcard card =
        flashcardRepository
            .findByIdAndUserId(id, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Flashcard not found"));

    card.setQuestion(request.getQuestion().trim());
    card.setAnswer(request.getAnswer().trim());

    return ResponseEntity.ok(FlashcardDTO.from(flashcardRepository.save(card)));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(Authentication authentication, @PathVariable Long id) {
    Long userId = (Long) authentication.getPrincipal();
    Flashcard card =
        flashcardRepository
            .findByIdAndUserId(id, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Flashcard not found"));

    flashcardRepository.delete(card);
    return ResponseEntity.noContent().build();
  }
}

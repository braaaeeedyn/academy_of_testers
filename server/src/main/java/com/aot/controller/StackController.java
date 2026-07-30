package com.aot.controller;

import com.aot.dto.StackDTO;
import com.aot.dto.StackRequest;
import com.aot.entity.Stack;
import com.aot.entity.StackCard;
import com.aot.entity.Subject;
import com.aot.entity.User;
import com.aot.exception.ResourceNotFoundException;
import com.aot.repository.FlashcardRepository;
import com.aot.repository.StackRepository;
import com.aot.repository.SubjectRepository;
import com.aot.repository.UserRepository;
import jakarta.validation.Valid;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.transaction.annotation.Transactional;
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
@RequestMapping("/api/stacks")
public class StackController {

  private static final long MAX_STACKS_PER_USER = 100;

  private final StackRepository stackRepository;
  private final FlashcardRepository flashcardRepository;
  private final SubjectRepository subjectRepository;
  private final UserRepository userRepository;

  public StackController(
      StackRepository stackRepository,
      FlashcardRepository flashcardRepository,
      SubjectRepository subjectRepository,
      UserRepository userRepository) {
    this.stackRepository = stackRepository;
    this.flashcardRepository = flashcardRepository;
    this.subjectRepository = subjectRepository;
    this.userRepository = userRepository;
  }

  @GetMapping
  @Transactional(readOnly = true)
  public ResponseEntity<List<StackDTO>> listBySubject(
      Authentication authentication, @RequestParam Long subjectId) {
    Long userId = (Long) authentication.getPrincipal();
    List<StackDTO> stacks =
        stackRepository.findByUserIdAndSubjectIdOrderByCreatedAtDesc(userId, subjectId).stream()
            .map(StackDTO::from)
            .toList();
    return ResponseEntity.ok(stacks);
  }

  @PostMapping
  @Transactional
  public ResponseEntity<StackDTO> create(
      Authentication authentication, @Valid @RequestBody StackRequest request) {
    Long userId = (Long) authentication.getPrincipal();

    if (stackRepository.countByUserId(userId) >= MAX_STACKS_PER_USER) {
      throw new IllegalArgumentException(
          "You have reached the limit of " + MAX_STACKS_PER_USER + " stacks.");
    }

    User user =
        userRepository
            .findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    Subject subject =
        subjectRepository
            .findById(request.getSubjectId())
            .orElseThrow(() -> new ResourceNotFoundException("Subject not found"));

    Stack stack = new Stack();
    stack.setUser(user);
    stack.setSubject(subject);
    stack.setName(request.getName().trim());
    stack.replaceCards(buildCards(request, userId, subject.getId()));

    return ResponseEntity.status(HttpStatus.CREATED)
        .body(StackDTO.from(stackRepository.save(stack)));
  }

  @PutMapping("/{id}")
  @Transactional
  public ResponseEntity<StackDTO> update(
      Authentication authentication,
      @PathVariable Long id,
      @Valid @RequestBody StackRequest request) {
    Long userId = (Long) authentication.getPrincipal();
    Stack stack =
        stackRepository
            .findByIdAndUserId(id, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Stack not found"));

    stack.setName(request.getName().trim());
    stack.replaceCards(buildCards(request, userId, stack.getSubject().getId()));

    return ResponseEntity.ok(StackDTO.from(stackRepository.save(stack)));
  }

  @DeleteMapping("/{id}")
  @Transactional
  public ResponseEntity<Void> delete(Authentication authentication, @PathVariable Long id) {
    Long userId = (Long) authentication.getPrincipal();
    Stack stack =
        stackRepository
            .findByIdAndUserId(id, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Stack not found"));

    stackRepository.delete(stack);
    return ResponseEntity.noContent().build();
  }

  /**
   * Turns the request's card refs into membership rows, rejecting anything that isn't exactly one
   * reference, is a duplicate, or points at a flashcard the caller doesn't own in this subject.
   */
  private List<StackCard> buildCards(StackRequest request, Long userId, Long subjectId) {
    Set<Long> ownedFlashcardIds =
        flashcardRepository.findByUserIdAndSubjectIdOrderByCreatedAtDesc(userId, subjectId).stream()
            .map(card -> card.getId())
            .collect(Collectors.toSet());

    List<StackCard> cards = new ArrayList<>();
    Set<Long> seenFlashcards = new HashSet<>();
    Set<String> seenPremade = new HashSet<>();
    int position = 0;

    for (StackRequest.CardRef ref : request.getCards()) {
      boolean hasFlashcard = ref.getFlashcardId() != null;
      boolean hasPremade = ref.getPremadeId() != null && !ref.getPremadeId().isBlank();

      if (hasFlashcard == hasPremade) {
        throw new IllegalArgumentException(
            "Each card must reference exactly one of flashcardId or premadeId.");
      }

      StackCard card = new StackCard();
      if (hasFlashcard) {
        if (!ownedFlashcardIds.contains(ref.getFlashcardId())) {
          throw new ResourceNotFoundException(
              "Flashcard " + ref.getFlashcardId() + " not found in this subject");
        }
        if (!seenFlashcards.add(ref.getFlashcardId())) {
          throw new IllegalArgumentException("A card cannot appear twice in a stack.");
        }
        card.setFlashcardId(ref.getFlashcardId());
      } else {
        String premadeId = ref.getPremadeId().trim();
        if (!seenPremade.add(premadeId)) {
          throw new IllegalArgumentException("A card cannot appear twice in a stack.");
        }
        card.setPremadeId(premadeId);
      }
      card.setPosition(position++);
      cards.add(card);
    }

    return cards;
  }
}

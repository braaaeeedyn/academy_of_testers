package com.aot.service;

import com.aot.entity.AiUsage;
import com.aot.entity.User;
import com.aot.exception.RateLimitExceededException;
import com.aot.repository.AiUsageRepository;
import com.aot.repository.UserRepository;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AiUsageService {

  private static final Duration WINDOW_DURATION = Duration.ofHours(1);

  private final AiUsageRepository aiUsageRepository;
  private final UserRepository userRepository;
  private final int maxPerHour;

  public AiUsageService(
      AiUsageRepository aiUsageRepository,
      UserRepository userRepository,
      @Value("${ai.usage.max-per-hour}") int maxPerHour) {
    this.aiUsageRepository = aiUsageRepository;
    this.userRepository = userRepository;
    this.maxPerHour = maxPerHour;
  }

  @Transactional
  public void checkAndIncrement(Long userId) {
    Optional<AiUsage> existing = aiUsageRepository.findByUserId(userId);

    if (existing.isEmpty()) {
      // First ever AI request — create row
      User user =
          userRepository
              .findById(userId)
              .orElseThrow(() -> new IllegalArgumentException("User not found"));
      AiUsage usage = new AiUsage();
      usage.setUser(user);
      usage.setUsageCount(1);
      usage.setWindowStart(LocalDateTime.now());
      aiUsageRepository.save(usage);
      return;
    }

    AiUsage usage = existing.get();
    LocalDateTime windowEnd = usage.getWindowStart().plus(WINDOW_DURATION);

    if (LocalDateTime.now().isAfter(windowEnd)) {
      // Window expired — reset
      usage.setUsageCount(1);
      usage.setWindowStart(LocalDateTime.now());
      aiUsageRepository.save(usage);
      return;
    }

    // Window still active
    if (usage.getUsageCount() >= maxPerHour) {
      long secondsUntilReset = Duration.between(LocalDateTime.now(), windowEnd).getSeconds();
      throw new RateLimitExceededException(
          "Rate limit reached — you can send up to "
              + maxPerHour
              + " messages per hour. Please try again later.",
          Math.max(secondsUntilReset, 0));
    }

    usage.setUsageCount(usage.getUsageCount() + 1);
    aiUsageRepository.save(usage);
  }

  public Map<String, Object> getUsageInfo(Long userId) {
    Optional<AiUsage> existing = aiUsageRepository.findByUserId(userId);

    if (existing.isEmpty()) {
      return Map.of(
          "used", 0, "limit", maxPerHour, "remaining", maxPerHour, "resetsAt", (Object) "N/A");
    }

    AiUsage usage = existing.get();
    LocalDateTime windowEnd = usage.getWindowStart().plus(WINDOW_DURATION);

    // If window expired, report fresh state
    if (LocalDateTime.now().isAfter(windowEnd)) {
      return Map.of(
          "used", 0, "limit", maxPerHour, "remaining", maxPerHour, "resetsAt", (Object) "N/A");
    }

    int used = usage.getUsageCount();
    int remaining = Math.max(0, maxPerHour - used);

    return Map.of(
        "used", used,
        "limit", maxPerHour,
        "remaining", remaining,
        "resetsAt", windowEnd.toString());
  }
}

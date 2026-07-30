package com.aot.controller;

import com.aot.dto.FrqGradeRequest;
import com.aot.dto.FrqGradeResponse;
import com.aot.service.AiUsageService;
import com.aot.service.FrqGradingService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AI grading of AP free-response essays. Lives under /api/ai so it inherits the authenticated
 * security matcher and shares the per-user AI usage budget with the chat helper.
 */
@RestController
@RequestMapping("/api/ai/frq")
public class FrqController {

  private final FrqGradingService frqGradingService;
  private final AiUsageService aiUsageService;

  public FrqController(FrqGradingService frqGradingService, AiUsageService aiUsageService) {
    this.frqGradingService = frqGradingService;
    this.aiUsageService = aiUsageService;
  }

  @PostMapping("/grade")
  public ResponseEntity<Map<String, Object>> grade(
      Authentication authentication, @Valid @RequestBody FrqGradeRequest request) {
    Long userId = (Long) authentication.getPrincipal();

    // Shares the AI budget with chat; throws RateLimitExceededException when over the limit.
    aiUsageService.checkAndIncrement(userId);

    FrqGradeResponse grade = frqGradingService.grade(request);
    Map<String, Object> usageInfo = aiUsageService.getUsageInfo(userId);

    return ResponseEntity.ok(Map.of("grade", grade, "remaining", usageInfo.get("remaining")));
  }
}

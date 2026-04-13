package com.aot.controller;

import com.aot.dto.AiChatRequest;
import com.aot.service.AiChatService;
import com.aot.service.AiUsageService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ai")
public class AiChatController {

  private final AiChatService aiChatService;
  private final AiUsageService aiUsageService;

  public AiChatController(AiChatService aiChatService, AiUsageService aiUsageService) {
    this.aiChatService = aiChatService;
    this.aiUsageService = aiUsageService;
  }

  @PostMapping("/chat")
  public ResponseEntity<Map<String, Object>> chat(
      Authentication authentication, @Valid @RequestBody AiChatRequest request) {
    Long userId = (Long) authentication.getPrincipal();

    // Check and increment usage (throws RateLimitExceededException if over limit)
    aiUsageService.checkAndIncrement(userId);

    String content = aiChatService.chat(request.getMessages());
    Map<String, Object> usageInfo = aiUsageService.getUsageInfo(userId);

    return ResponseEntity.ok(
        Map.of(
            "content", content,
            "remaining", usageInfo.get("remaining")));
  }

  @GetMapping("/chat/usage")
  public ResponseEntity<Map<String, Object>> getUsage(Authentication authentication) {
    Long userId = (Long) authentication.getPrincipal();
    Map<String, Object> usageInfo = aiUsageService.getUsageInfo(userId);
    return ResponseEntity.ok(usageInfo);
  }
}

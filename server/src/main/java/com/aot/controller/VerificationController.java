package com.aot.controller;

import com.aot.dto.VerifyRequest;
import com.aot.service.VerificationService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class VerificationController {

  private final VerificationService verificationService;

  public VerificationController(VerificationService verificationService) {
    this.verificationService = verificationService;
  }

  @PostMapping("/verify")
  public ResponseEntity<Map<String, String>> verify(@Valid @RequestBody VerifyRequest request) {
    verificationService.verifyCode(request.getUserId(), request.getCode());
    return ResponseEntity.ok(Map.of("message", "Verification successful. You can now log in."));
  }

  @PostMapping("/verify/resend")
  public ResponseEntity<Map<String, String>> resend(@RequestBody Map<String, Long> request) {
    Long userId = request.get("userId");
    if (userId == null) {
      throw new IllegalArgumentException("userId is required");
    }
    verificationService.resendVerificationCode(userId);
    return ResponseEntity.ok(Map.of("message", "Verification code resent"));
  }
}

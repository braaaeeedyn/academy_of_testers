package com.aot.controller;

import com.aot.dto.AuthResponse;
import com.aot.dto.LoginRequest;
import com.aot.dto.RefreshRequest;
import com.aot.dto.RegisterRequest;
import com.aot.entity.User;
import com.aot.service.AuthService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/register")
  public ResponseEntity<Map<String, Object>> register(
      @Valid @RequestBody RegisterRequest request) {
    User user = authService.register(request);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(
            Map.of(
                "message", "Verification code sent to your email",
                "userId", user.getId()));
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
    AuthResponse response = authService.login(request);
    return ResponseEntity.ok(response);
  }

  @PostMapping("/refresh")
  public ResponseEntity<AuthResponse> refresh(@Valid @RequestBody RefreshRequest request) {
    AuthResponse response = authService.refreshAccessToken(request.getRefreshToken());
    return ResponseEntity.ok(response);
  }

  @PostMapping("/logout")
  public ResponseEntity<Map<String, String>> logout(@Valid @RequestBody RefreshRequest request) {
    authService.logout(request.getRefreshToken());
    return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
  }
}

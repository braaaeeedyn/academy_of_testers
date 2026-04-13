package com.aot.controller;

import com.aot.dto.AuthResponse;
import com.aot.dto.ChangePasswordRequest;
import com.aot.dto.UpdateProfileRequest;
import com.aot.entity.User;
import com.aot.exception.ResourceNotFoundException;
import com.aot.repository.UserRepository;
import com.aot.service.AuthService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserRepository userRepository;
  private final AuthService authService;

  public UserController(UserRepository userRepository, AuthService authService) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  @GetMapping("/me")
  public ResponseEntity<AuthResponse.UserInfo> getProfile(Authentication authentication) {
    Long userId = (Long) authentication.getPrincipal();
    User user =
        userRepository
            .findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));

    AuthResponse.UserInfo userInfo =
        new AuthResponse.UserInfo(
            user.getId(), user.getDisplayName(), user.getEmail());
    return ResponseEntity.ok(userInfo);
  }

  @PutMapping("/me")
  public ResponseEntity<AuthResponse.UserInfo> updateProfile(
      Authentication authentication, @Valid @RequestBody UpdateProfileRequest request) {
    Long userId = (Long) authentication.getPrincipal();
    User user =
        userRepository
            .findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));

    user.setDisplayName(request.getDisplayName());
    userRepository.save(user);

    AuthResponse.UserInfo userInfo =
        new AuthResponse.UserInfo(
            user.getId(), user.getDisplayName(), user.getEmail());
    return ResponseEntity.ok(userInfo);
  }

  @PostMapping("/me/password")
  public ResponseEntity<Map<String, String>> changePassword(
      Authentication authentication, @Valid @RequestBody ChangePasswordRequest request) {
    Long userId = (Long) authentication.getPrincipal();
    authService.changePassword(userId, request.getCurrentPassword(), request.getNewPassword());
    return ResponseEntity.ok(
        Map.of("message", "Password changed successfully. All sessions have been revoked."));
  }
}

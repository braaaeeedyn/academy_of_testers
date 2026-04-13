package com.aot.service;

import com.aot.dto.AuthResponse;
import com.aot.dto.LoginRequest;
import com.aot.dto.RegisterRequest;
import com.aot.entity.RefreshToken;
import com.aot.entity.User;
import com.aot.exception.AccountLockedException;
import com.aot.exception.AuthenticationException;
import com.aot.exception.DuplicateAccountException;
import com.aot.repository.RefreshTokenRepository;
import com.aot.repository.UserRepository;
import com.aot.security.JwtService;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

  private static final int MAX_FAILED_ATTEMPTS = 5;
  private static final int LOCK_DURATION_MINUTES = 15;

  private final UserRepository userRepository;
  private final RefreshTokenRepository refreshTokenRepository;
  private final JwtService jwtService;
  private final PasswordEncoder passwordEncoder;
  private final VerificationService verificationService;
  private final long refreshTokenExpirationMs;
  private final SecureRandom secureRandom = new SecureRandom();

  public AuthService(
      UserRepository userRepository,
      RefreshTokenRepository refreshTokenRepository,
      JwtService jwtService,
      PasswordEncoder passwordEncoder,
      VerificationService verificationService,
      @Value("${jwt.refresh-token-expiration-ms}") long refreshTokenExpirationMs) {
    this.userRepository = userRepository;
    this.refreshTokenRepository = refreshTokenRepository;
    this.jwtService = jwtService;
    this.passwordEncoder = passwordEncoder;
    this.verificationService = verificationService;
    this.refreshTokenExpirationMs = refreshTokenExpirationMs;
  }

  @Transactional
  public User register(RegisterRequest request) {
    if (request.getEmail() == null || request.getEmail().isBlank()) {
      throw new IllegalArgumentException("Email is required");
    }

    // Check if email is already taken
    var existing = userRepository.findByEmail(request.getEmail());
    if (existing.isPresent()) {
      User existingUser = existing.get();
      if (existingUser.isEmailVerified()) {
        throw new DuplicateAccountException("An account with this email already exists");
      }
      // Unverified account — overwrite it so the user can re-register
      existingUser.setPasswordHash(passwordEncoder.encode(request.getPassword()));
      existingUser.setDisplayName(request.getDisplayName());
      existingUser = userRepository.save(existingUser);
      verificationService.sendVerificationCode(existingUser);
      return existingUser;
    }

    User user = new User();
    user.setEmail(request.getEmail());
    user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
    user.setDisplayName(request.getDisplayName());

    user = userRepository.save(user);

    verificationService.sendVerificationCode(user);

    return user;
  }

  @Transactional
  public AuthResponse login(LoginRequest request) {
    User user = findUserByIdentifier(request.getIdentifier());

    // Check if account is locked
    if (user.isAccountLocked()) {
      if (user.getLockExpiresAt() != null && user.getLockExpiresAt().isAfter(LocalDateTime.now())) {
        throw new AccountLockedException(
            "Account is locked. Try again after " + user.getLockExpiresAt());
      }
      // Lock expired, unlock the account
      user.setAccountLocked(false);
      user.setFailedLoginAttempts(0);
      user.setLockExpiresAt(null);
    }

    // Verify password
    if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
      handleFailedLogin(user);
      throw new AuthenticationException("Invalid credentials");
    }

    // Check email verification status
    if (!user.isEmailVerified()) {
      throw new AuthenticationException(
          "Account not verified. Please verify your email address.");
    }

    // Reset failed attempts on successful login
    if (user.getFailedLoginAttempts() > 0) {
      user.setFailedLoginAttempts(0);
      userRepository.save(user);
    }

    return generateAuthResponse(user);
  }

  @Transactional
  public AuthResponse refreshAccessToken(String rawRefreshToken) {
    String tokenHash = hashToken(rawRefreshToken);

    RefreshToken refreshToken =
        refreshTokenRepository
            .findByTokenHashAndRevokedFalse(tokenHash)
            .orElseThrow(() -> new AuthenticationException("Invalid refresh token"));

    if (refreshToken.getExpiresAt().isBefore(LocalDateTime.now())) {
      refreshToken.setRevoked(true);
      refreshTokenRepository.save(refreshToken);
      throw new AuthenticationException("Refresh token expired");
    }

    User user = refreshToken.getUser();

    // Rotate refresh token: revoke old, issue new
    refreshToken.setRevoked(true);
    refreshTokenRepository.save(refreshToken);

    return generateAuthResponse(user);
  }

  @Transactional
  public void logout(String rawRefreshToken) {
    String tokenHash = hashToken(rawRefreshToken);
    refreshTokenRepository
        .findByTokenHashAndRevokedFalse(tokenHash)
        .ifPresent(
            token -> {
              token.setRevoked(true);
              refreshTokenRepository.save(token);
            });
  }

  @Transactional
  public void logoutAll(Long userId) {
    refreshTokenRepository.revokeAllByUserId(userId);
  }

  @Transactional
  public void changePassword(Long userId, String currentPassword, String newPassword) {
    User user =
        userRepository
            .findById(userId)
            .orElseThrow(() -> new AuthenticationException("User not found"));

    if (!passwordEncoder.matches(currentPassword, user.getPasswordHash())) {
      throw new AuthenticationException("Current password is incorrect");
    }

    user.setPasswordHash(passwordEncoder.encode(newPassword));
    userRepository.save(user);

    // Revoke all refresh tokens for security
    refreshTokenRepository.revokeAllByUserId(userId);
  }

  private AuthResponse generateAuthResponse(User user) {
    String accessToken = jwtService.generateAccessToken(user.getId(), user.getDisplayName());
    String rawRefreshToken = generateRawRefreshToken();
    String tokenHash = hashToken(rawRefreshToken);

    RefreshToken refreshToken = new RefreshToken();
    refreshToken.setUser(user);
    refreshToken.setTokenHash(tokenHash);
    refreshToken.setExpiresAt(
        LocalDateTime.now().plusSeconds(refreshTokenExpirationMs / 1000));
    refreshTokenRepository.save(refreshToken);

    AuthResponse.UserInfo userInfo =
        new AuthResponse.UserInfo(
            user.getId(), user.getDisplayName(), user.getEmail());

    return new AuthResponse(accessToken, rawRefreshToken, userInfo);
  }

  private User findUserByIdentifier(String identifier) {
    return userRepository
        .findByEmail(identifier)
        .orElseThrow(() -> new AuthenticationException("Invalid credentials"));
  }

  private void handleFailedLogin(User user) {
    int attempts = user.getFailedLoginAttempts() + 1;
    user.setFailedLoginAttempts(attempts);

    if (attempts >= MAX_FAILED_ATTEMPTS) {
      user.setAccountLocked(true);
      user.setLockExpiresAt(LocalDateTime.now().plusMinutes(LOCK_DURATION_MINUTES));
    }

    userRepository.save(user);
  }

  private String generateRawRefreshToken() {
    byte[] bytes = new byte[64];
    secureRandom.nextBytes(bytes);
    return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
  }

  private String hashToken(String token) {
    try {
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] hash = digest.digest(token.getBytes(StandardCharsets.UTF_8));
      return Base64.getUrlEncoder().withoutPadding().encodeToString(hash);
    } catch (NoSuchAlgorithmException e) {
      throw new RuntimeException("SHA-256 not available", e);
    }
  }
}

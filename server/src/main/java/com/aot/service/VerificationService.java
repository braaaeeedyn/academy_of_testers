package com.aot.service;

import com.aot.entity.User;
import com.aot.entity.VerificationCode;
import com.aot.exception.VerificationException;
import com.aot.repository.UserRepository;
import com.aot.repository.VerificationCodeRepository;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class VerificationService {

  private static final int CODE_EXPIRY_MINUTES = 10;
  private static final int MAX_ATTEMPTS_PER_CODE = 5;
  private static final int MAX_CODES_PER_DAY = 5;
  private static final int RESEND_COOLDOWN_SECONDS = 60;
  private static final String VERIFICATION_TYPE = "EMAIL";

  private final VerificationCodeRepository verificationCodeRepository;
  private final UserRepository userRepository;
  private final EmailService emailService;
  private final SecureRandom secureRandom = new SecureRandom();

  public VerificationService(
      VerificationCodeRepository verificationCodeRepository,
      UserRepository userRepository,
      EmailService emailService) {
    this.verificationCodeRepository = verificationCodeRepository;
    this.userRepository = userRepository;
    this.emailService = emailService;
  }

  @Transactional
  public void sendVerificationCode(User user) {
    if (user.getEmail() == null) {
      throw new VerificationException("User has no email address");
    }

    // Check daily limit
    long codesLast24h =
        verificationCodeRepository.countByUserIdAndCreatedAtAfter(
            user.getId(), LocalDateTime.now().minusDays(1));
    if (codesLast24h >= MAX_CODES_PER_DAY) {
      throw new VerificationException(
          "Maximum verification codes per day reached. Try again tomorrow.");
    }

    String code = generateCode();

    VerificationCode verificationCode = new VerificationCode();
    verificationCode.setUser(user);
    verificationCode.setCode(code);
    verificationCode.setType(VERIFICATION_TYPE);
    verificationCode.setExpiresAt(LocalDateTime.now().plusMinutes(CODE_EXPIRY_MINUTES));
    verificationCodeRepository.save(verificationCode);

    emailService.sendVerificationEmail(user.getEmail(), code);
  }

  @Transactional
  public void resendVerificationCode(Long userId) {
    User user =
        userRepository
            .findById(userId)
            .orElseThrow(() -> new VerificationException("User not found"));

    // Check cooldown on last code
    Optional<VerificationCode> lastCode =
        verificationCodeRepository.findTopByUserIdAndTypeAndUsedFalseOrderByCreatedAtDesc(
            userId, VERIFICATION_TYPE);
    if (lastCode.isPresent()) {
      LocalDateTime cooldownExpiry =
          lastCode.get().getCreatedAt().plusSeconds(RESEND_COOLDOWN_SECONDS);
      if (cooldownExpiry.isAfter(LocalDateTime.now())) {
        throw new VerificationException("Please wait before requesting a new code");
      }
    }

    sendVerificationCode(user);
  }

  @Transactional
  public void verifyCode(Long userId, String code) {
    VerificationCode verificationCode =
        verificationCodeRepository
            .findTopByUserIdAndTypeAndUsedFalseOrderByCreatedAtDesc(userId, VERIFICATION_TYPE)
            .orElseThrow(() -> new VerificationException("No pending verification code found"));

    // Check max attempts
    if (verificationCode.getAttempts() >= MAX_ATTEMPTS_PER_CODE) {
      verificationCode.setUsed(true);
      verificationCodeRepository.save(verificationCode);
      throw new VerificationException(
          "Too many failed attempts. Please request a new verification code.");
    }

    // Check expiry
    if (verificationCode.getExpiresAt().isBefore(LocalDateTime.now())) {
      throw new VerificationException("Verification code has expired. Please request a new one.");
    }

    // Increment attempts
    verificationCode.setAttempts(verificationCode.getAttempts() + 1);

    // Check code
    if (!verificationCode.getCode().equals(code)) {
      verificationCodeRepository.save(verificationCode);
      int remaining = MAX_ATTEMPTS_PER_CODE - verificationCode.getAttempts();
      throw new VerificationException(
          "Invalid verification code. " + remaining + " attempts remaining.");
    }

    // Success
    verificationCode.setUsed(true);
    verificationCodeRepository.save(verificationCode);

    User user =
        userRepository
            .findById(userId)
            .orElseThrow(() -> new VerificationException("User not found"));

    user.setEmailVerified(true);
    userRepository.save(user);
  }

  private String generateCode() {
    int code = secureRandom.nextInt(900000) + 100000;
    return String.valueOf(code);
  }
}

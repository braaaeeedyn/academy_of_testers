package com.aot.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

  private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

  private final JavaMailSender mailSender;
  private final String fromEmail;
  private final String fromName;
  private final boolean enabled;

  public EmailService(
      JavaMailSender mailSender,
      @Value("${app.mail.from}") String fromEmail,
      @Value("${app.mail.from-name:Academy of Testers}") String fromName,
      @Value("${spring.mail.username:}") String mailUsername) {
    this.mailSender = mailSender;
    this.fromEmail = fromEmail;
    this.fromName = fromName;
    this.enabled = mailUsername != null && !mailUsername.isBlank();
  }

  public void sendVerificationEmail(String toEmail, String code) {
    if (!enabled) {
      logger.warn("SMTP not configured. Verification code for {}: {}", toEmail, code);
      return;
    }

    try {
      MimeMessage message = mailSender.createMimeMessage();
      MimeMessageHelper helper = new MimeMessageHelper(message, false, "UTF-8");
      helper.setFrom(fromEmail, fromName);
      helper.setTo(toEmail);
      helper.setSubject("Your Academy of Testers Verification Code");
      helper.setText(buildVerificationEmailHtml(code), true);

      mailSender.send(message);
    } catch (MessagingException | UnsupportedEncodingException | MailException e) {
      logger.error("Failed to send verification email to {}", toEmail, e);
    }
  }

  private String buildVerificationEmailHtml(String code) {
    return "<div style=\"font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;\">"
        + "<h2 style=\"color: #1a1a1a;\">Verify Your Account</h2>"
        + "<p>Your verification code is:</p>"
        + "<div style=\"background: #f4f4f5; border-radius: 8px; padding: 20px; "
        + "text-align: center; margin: 20px 0;\">"
        + "<span style=\"font-size: 32px; font-weight: bold; letter-spacing: 8px; "
        + "color: #18181b;\">"
        + code
        + "</span></div>"
        + "<p>This code expires in 10 minutes.</p>"
        + "<p style=\"color: #71717a; font-size: 14px;\">If you didn't request this code, "
        + "you can safely ignore this email.</p>"
        + "</div>";
  }
}

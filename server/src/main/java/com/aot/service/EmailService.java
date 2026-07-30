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
  private final String contactRecipient;
  private final boolean enabled;

  public EmailService(
      JavaMailSender mailSender,
      @Value("${app.mail.from}") String fromEmail,
      @Value("${app.mail.from-name:Academy of Testers}") String fromName,
      @Value("${app.mail.contact-to:braedynthompson@berkeley.edu}") String contactRecipient,
      @Value("${spring.mail.username:}") String mailUsername) {
    this.mailSender = mailSender;
    this.fromEmail = fromEmail;
    this.fromName = fromName;
    this.contactRecipient = contactRecipient;
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

  /**
   * Sends a contact-form submission to the site owner. The visitor's address is used as the
   * reply-to so replies go straight back to them. Throws {@link IllegalStateException} on any
   * failure so the caller can surface an error to the sender.
   */
  public void sendContactEmail(String name, String email, String message) {
    if (!enabled) {
      logger.warn("SMTP not configured. Contact message from {} ({}) dropped.", name, email);
      throw new IllegalStateException("Email is not configured on the server.");
    }

    try {
      MimeMessage mimeMessage = mailSender.createMimeMessage();
      MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
      helper.setFrom(fromEmail, fromName);
      helper.setTo(contactRecipient);
      helper.setReplyTo(email, name);
      helper.setSubject("Academy of Testers Contact: " + name);
      helper.setText(buildContactEmailHtml(name, email, message), true);

      mailSender.send(mimeMessage);
    } catch (MessagingException | UnsupportedEncodingException | MailException e) {
      logger.error("Failed to send contact email from {} ({})", name, email, e);
      throw new IllegalStateException("Failed to send your message. Please try again later.", e);
    }
  }

  private String buildContactEmailHtml(String name, String email, String message) {
    return "<div style=\"font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;\">"
        + "<h2 style=\"color: #1a1a1a;\">New contact message</h2>"
        + "<p style=\"color: #71717a; font-size: 14px;\"><strong>From:</strong> "
        + escapeHtml(name)
        + " (<a href=\"mailto:"
        + escapeHtml(email)
        + "\">"
        + escapeHtml(email)
        + "</a>)</p>"
        + "<div style=\"background: #f4f4f5; border-radius: 8px; padding: 20px; margin: 16px 0; "
        + "white-space: pre-wrap; color: #18181b;\">"
        + escapeHtml(message)
        + "</div></div>";
  }

  private String escapeHtml(String value) {
    return value
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\"", "&quot;");
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

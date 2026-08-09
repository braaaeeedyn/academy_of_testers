package com.aot.service;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

/**
 * Sends transactional email through Brevo's HTTP API (https://api.brevo.com/v3/smtp/email) rather
 * than SMTP. Render blocks outbound SMTP ports (25/465/587/2525), so SMTP connects simply time out;
 * the HTTP API travels over port 443, which is never blocked.
 */
@Service
public class EmailService {

  private static final Logger logger = LoggerFactory.getLogger(EmailService.class);
  private static final String SEND_ENDPOINT = "/smtp/email";

  private final RestClient restClient;
  private final String fromEmail;
  private final String fromName;
  private final String contactRecipient;
  private final boolean enabled;

  public EmailService(
      @Value("${brevo.api-key:}") String apiKey,
      @Value("${brevo.api-base-url:https://api.brevo.com/v3}") String apiBaseUrl,
      @Value("${app.mail.from}") String fromEmail,
      @Value("${app.mail.from-name:Academy of Testers}") String fromName,
      @Value("${app.mail.contact-to:braedynthompson@berkeley.edu}") String contactRecipient) {
    this.fromEmail = fromEmail;
    this.fromName = fromName;
    this.contactRecipient = contactRecipient;
    this.enabled = apiKey != null && !apiKey.isBlank();

    SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();
    requestFactory.setConnectTimeout(10_000);
    requestFactory.setReadTimeout(15_000);

    this.restClient =
        RestClient.builder()
            .baseUrl(apiBaseUrl)
            .requestFactory(requestFactory)
            .defaultHeader("api-key", apiKey == null ? "" : apiKey)
            .defaultHeader("accept", MediaType.APPLICATION_JSON_VALUE)
            .build();
  }

  public void sendVerificationEmail(String toEmail, String code) {
    if (!enabled) {
      logger.warn("Brevo API key not configured. Verification code for {}: {}", toEmail, code);
      return;
    }

    Map<String, Object> body =
        Map.of(
            "sender", Map.of("name", fromName, "email", fromEmail),
            "to", List.of(Map.of("email", toEmail)),
            "subject", "Your Academy of Testers Verification Code",
            "htmlContent", buildVerificationEmailHtml(code));

    try {
      send(body);
    } catch (RestClientException e) {
      // Swallow: registration should not fail just because the code email didn't send. The user
      // can request a resend from the verification screen.
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
      logger.warn(
          "Brevo API key not configured. Contact message from {} ({}) dropped.", name, email);
      throw new IllegalStateException("Email is not configured on the server.");
    }

    Map<String, Object> body =
        Map.of(
            "sender", Map.of("name", fromName, "email", fromEmail),
            "to", List.of(Map.of("email", contactRecipient)),
            "replyTo", Map.of("email", email, "name", name),
            "subject", "Academy of Testers Contact: " + name,
            "htmlContent", buildContactEmailHtml(name, email, message));

    try {
      send(body);
    } catch (RestClientException e) {
      logger.error("Failed to send contact email from {} ({})", name, email, e);
      throw new IllegalStateException("Failed to send your message. Please try again later.", e);
    }
  }

  private void send(Map<String, Object> body) {
    restClient
        .post()
        .uri(SEND_ENDPOINT)
        .contentType(MediaType.APPLICATION_JSON)
        .body(body)
        .retrieve()
        .toBodilessEntity();
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

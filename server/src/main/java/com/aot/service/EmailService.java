package com.aot.service;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

  private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

  private final String apiKey;
  private final String fromEmail;

  public EmailService(
      @Value("${sendgrid.api-key}") String apiKey,
      @Value("${sendgrid.from-email}") String fromEmail) {
    this.apiKey = apiKey;
    this.fromEmail = fromEmail;
  }

  public void sendVerificationEmail(String toEmail, String code) {
    if (apiKey == null || apiKey.isBlank()) {
      logger.warn(
          "SendGrid API key not configured. Verification code for {}: {}", toEmail, code);
      return;
    }

    Email from = new Email(fromEmail, "Academy of Testers");
    Email to = new Email(toEmail);
    String subject = "Your Academy of Testers Verification Code";
    Content content =
        new Content(
            "text/html",
            buildVerificationEmailHtml(code));

    Mail mail = new Mail(from, subject, to, content);

    SendGrid sg = new SendGrid(apiKey);
    Request request = new Request();

    try {
      request.setMethod(Method.POST);
      request.setEndpoint("mail/send");
      request.setBody(mail.build());
      Response response = sg.api(request);

      if (response.getStatusCode() >= 400) {
        logger.error(
            "SendGrid error: status={}, body={}", response.getStatusCode(), response.getBody());
      }
    } catch (IOException e) {
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

package com.aot.controller;

import com.aot.dto.ContactRequest;
import com.aot.exception.RateLimitExceededException;
import com.aot.service.EmailService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

  // The form is public and every submission sends a real email, so it's throttled two ways: per
  // client (stops one person flooding the inbox) and site-wide (caps the email quota even if the
  // per-client key is spoofed through X-Forwarded-For). In memory is fine for a single instance.
  private static final long WINDOW_MS = 60 * 60 * 1000L;
  private static final int MAX_PER_CLIENT = 5;
  private static final int MAX_SITE_WIDE = 60;
  private static final int MAX_TRACKED_CLIENTS = 10_000;

  private final EmailService emailService;
  private final Map<String, Deque<Long>> sendsByClient = new ConcurrentHashMap<>();
  private final Deque<Long> siteWideSends = new ArrayDeque<>();

  public ContactController(EmailService emailService) {
    this.emailService = emailService;
  }

  @PostMapping
  public ResponseEntity<Map<String, String>> submit(
      @Valid @RequestBody ContactRequest request, HttpServletRequest http) {
    checkRateLimit(clientKey(http));
    emailService.sendContactEmail(
        request.getName().trim(), request.getEmail().trim(), request.getMessage().trim());
    return ResponseEntity.ok(Map.of("message", "Message sent"));
  }

  private void checkRateLimit(String client) {
    long now = System.currentTimeMillis();
    synchronized (siteWideSends) {
      prune(siteWideSends, now);
      if (siteWideSends.size() >= MAX_SITE_WIDE) {
        throw limited(siteWideSends, now);
      }
      if (sendsByClient.size() >= MAX_TRACKED_CLIENTS) {
        sendsByClient.values().removeIf(d -> d.isEmpty() || now - d.peekLast() > WINDOW_MS);
      }
      Deque<Long> mine = sendsByClient.computeIfAbsent(client, k -> new ArrayDeque<>());
      prune(mine, now);
      if (mine.size() >= MAX_PER_CLIENT) {
        throw limited(mine, now);
      }
      mine.addLast(now);
      siteWideSends.addLast(now);
    }
  }

  private static void prune(Deque<Long> sends, long now) {
    while (!sends.isEmpty() && now - sends.peekFirst() > WINDOW_MS) {
      sends.pollFirst();
    }
  }

  private static RateLimitExceededException limited(Deque<Long> sends, long now) {
    long retryAfterSeconds = Math.max(1, (sends.peekFirst() + WINDOW_MS - now) / 1000);
    return new RateLimitExceededException(
        "Too many messages sent. Please try again later.", retryAfterSeconds);
  }

  /** The original client behind Vercel's and Render's proxies, falling back to the socket peer. */
  private static String clientKey(HttpServletRequest http) {
    String forwarded = http.getHeader("X-Forwarded-For");
    if (forwarded != null && !forwarded.isBlank()) {
      return forwarded.split(",")[0].trim();
    }
    return http.getRemoteAddr();
  }
}

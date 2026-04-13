package com.aot.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<Map<String, Object>> handleResourceNotFound(
      ResourceNotFoundException ex) {
    return buildResponse(HttpStatus.NOT_FOUND, "Not Found", ex.getMessage());
  }

  @ExceptionHandler(IllegalArgumentException.class)
  public ResponseEntity<Map<String, Object>> handleIllegalArgument(IllegalArgumentException ex) {
    return buildResponse(HttpStatus.BAD_REQUEST, "Bad Request", ex.getMessage());
  }

  @ExceptionHandler(AuthenticationException.class)
  public ResponseEntity<Map<String, Object>> handleAuthentication(AuthenticationException ex) {
    return buildResponse(HttpStatus.UNAUTHORIZED, "Unauthorized", ex.getMessage());
  }

  @ExceptionHandler(AccountLockedException.class)
  public ResponseEntity<Map<String, Object>> handleAccountLocked(AccountLockedException ex) {
    return buildResponse(HttpStatus.FORBIDDEN, "Account Locked", ex.getMessage());
  }

  @ExceptionHandler(DuplicateAccountException.class)
  public ResponseEntity<Map<String, Object>> handleDuplicateAccount(
      DuplicateAccountException ex) {
    return buildResponse(HttpStatus.CONFLICT, "Conflict", ex.getMessage());
  }

  @ExceptionHandler(VerificationException.class)
  public ResponseEntity<Map<String, Object>> handleVerification(VerificationException ex) {
    return buildResponse(HttpStatus.BAD_REQUEST, "Verification Error", ex.getMessage());
  }

  @ExceptionHandler(RateLimitExceededException.class)
  public ResponseEntity<Map<String, Object>> handleRateLimit(RateLimitExceededException ex) {
    Map<String, Object> body = new HashMap<>();
    body.put("timestamp", LocalDateTime.now());
    body.put("status", HttpStatus.TOO_MANY_REQUESTS.value());
    body.put("error", "Rate Limit Exceeded");
    body.put("message", ex.getMessage());
    body.put("retryAfterSeconds", ex.getRetryAfterSeconds());
    return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
        .header("Retry-After", String.valueOf(ex.getRetryAfterSeconds()))
        .body(body);
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<Map<String, Object>> handleValidation(
      MethodArgumentNotValidException ex) {
    List<String> errors =
        ex.getBindingResult().getFieldErrors().stream()
            .map(
                fieldError ->
                    fieldError.getField() + ": " + fieldError.getDefaultMessage())
            .collect(Collectors.toList());

    Map<String, Object> error = new HashMap<>();
    error.put("timestamp", LocalDateTime.now());
    error.put("status", HttpStatus.BAD_REQUEST.value());
    error.put("error", "Validation Error");
    error.put("messages", errors);
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<Map<String, Object>> handleGenericException(Exception ex) {
    return buildResponse(
        HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error", "An unexpected error occurred");
  }

  private ResponseEntity<Map<String, Object>> buildResponse(
      HttpStatus status, String error, String message) {
    Map<String, Object> body = new HashMap<>();
    body.put("timestamp", LocalDateTime.now());
    body.put("status", status.value());
    body.put("error", error);
    body.put("message", message);
    return ResponseEntity.status(status).body(body);
  }
}

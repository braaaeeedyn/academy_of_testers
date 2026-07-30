package com.aot.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactRequest {

  @NotBlank(message = "Name is required")
  @Size(max = 200, message = "Name is too long")
  private String name;

  @NotBlank(message = "Email is required")
  @Email(message = "A valid email is required")
  @Size(max = 320, message = "Email is too long")
  private String email;

  @NotBlank(message = "Message is required")
  @Size(max = 5000, message = "Message is too long")
  private String message;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}

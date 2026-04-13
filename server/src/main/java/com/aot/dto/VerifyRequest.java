package com.aot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class VerifyRequest {

  @NotNull(message = "User ID is required")
  private Long userId;

  @NotBlank(message = "Verification code is required")
  @Pattern(regexp = "^\\d{6}$", message = "Code must be exactly 6 digits")
  private String code;

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }
}

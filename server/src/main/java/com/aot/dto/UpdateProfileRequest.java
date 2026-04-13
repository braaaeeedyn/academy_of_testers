package com.aot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UpdateProfileRequest {

  @NotBlank(message = "Display name is required")
  @Size(min = 1, max = 100, message = "Display name must be between 1 and 100 characters")
  private String displayName;

  public String getDisplayName() {
    return displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }
}

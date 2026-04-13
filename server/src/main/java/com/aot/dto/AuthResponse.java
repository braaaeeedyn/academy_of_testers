package com.aot.dto;

public class AuthResponse {

  private String accessToken;
  private String refreshToken;
  private UserInfo user;

  public AuthResponse() {}

  public AuthResponse(String accessToken, String refreshToken, UserInfo user) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.user = user;
  }

  public String getAccessToken() {
    return accessToken;
  }

  public void setAccessToken(String accessToken) {
    this.accessToken = accessToken;
  }

  public String getRefreshToken() {
    return refreshToken;
  }

  public void setRefreshToken(String refreshToken) {
    this.refreshToken = refreshToken;
  }

  public UserInfo getUser() {
    return user;
  }

  public void setUser(UserInfo user) {
    this.user = user;
  }

  public static class UserInfo {

    private Long id;
    private String displayName;
    private String email;

    public UserInfo() {}

    public UserInfo(Long id, String displayName, String email) {
      this.id = id;
      this.displayName = displayName;
      this.email = email;
    }

    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    public String getDisplayName() {
      return displayName;
    }

    public void setDisplayName(String displayName) {
      this.displayName = displayName;
    }

    public String getEmail() {
      return email;
    }

    public void setEmail(String email) {
      this.email = email;
    }
  }
}

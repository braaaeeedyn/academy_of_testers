package com.aot.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;

public class AiChatRequest {

  @NotNull(message = "Messages are required")
  @Size(min = 1, message = "At least one message is required")
  private List<ChatMessage> messages;

  public List<ChatMessage> getMessages() {
    return messages;
  }

  public void setMessages(List<ChatMessage> messages) {
    this.messages = messages;
  }

  public static class ChatMessage {

    private String role;
    private String content;

    public ChatMessage() {}

    public ChatMessage(String role, String content) {
      this.role = role;
      this.content = content;
    }

    public String getRole() {
      return role;
    }

    public void setRole(String role) {
      this.role = role;
    }

    public String getContent() {
      return content;
    }

    public void setContent(String content) {
      this.content = content;
    }
  }
}

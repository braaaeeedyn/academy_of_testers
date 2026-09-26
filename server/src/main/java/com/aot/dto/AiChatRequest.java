package com.aot.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;

public class AiChatRequest {

  @NotNull(message = "Messages are required")
  @Size(min = 1, message = "At least one message is required")
  private List<ChatMessage> messages;

  /** Optional subject the student is studying, used to scope curriculum retrieval. */
  @Size(max = 120, message = "Subject is too long")
  private String subject;

  /**
   * Optional skill focus. When present, retrieval is filtered to these skill nodes (the student's
   * current focus / weak skills); when absent, retrieval widens to the whole subject. Aligns with
   * the 8-skill model ids in {@code sat_skills}.
   */
  @Size(max = 10, message = "Too many skill ids")
  private List<@Size(max = 64) String> skillIds;

  /**
   * Optional mastery label for the focus skill (e.g. "novice", "developing", "proficient"). Already
   * derived client-side from the pre-decayed weights returned by /mastery — passed through so the
   * assistant can adjust explanation depth. The server never recomputes model math from it.
   */
  @Size(max = 32, message = "Mastery level is too long")
  private String masteryLevel;

  public List<ChatMessage> getMessages() {
    return messages;
  }

  public void setMessages(List<ChatMessage> messages) {
    this.messages = messages;
  }

  public String getSubject() {
    return subject;
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  public List<String> getSkillIds() {
    return skillIds;
  }

  public void setSkillIds(List<String> skillIds) {
    this.skillIds = skillIds;
  }

  public String getMasteryLevel() {
    return masteryLevel;
  }

  public void setMasteryLevel(String masteryLevel) {
    this.masteryLevel = masteryLevel;
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

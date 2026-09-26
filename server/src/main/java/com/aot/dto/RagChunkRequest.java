package com.aot.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;

/** A batch of chunks to ingest into the RAG corpus. Each is upserted by (corpus, refId). */
public class RagChunkRequest {

  @NotNull(message = "chunks are required")
  @Size(min = 1, max = 200, message = "Provide between 1 and 200 chunks")
  private List<@Valid Chunk> chunks;

  public List<Chunk> getChunks() {
    return chunks;
  }

  public void setChunks(List<Chunk> chunks) {
    this.chunks = chunks;
  }

  public static class Chunk {

    /** 'ap_rubric', 'ap_exemplar', or 'curriculum'. */
    @NotBlank(message = "corpus is required")
    private String corpus;

    /** Unique-within-corpus citation id, e.g. "APLANG-RA:thesis" or "curriculum:linear-eq:1". */
    @NotBlank(message = "refId is required")
    @Size(max = 160)
    private String refId;

    @Size(max = 120)
    private String subject;

    @Size(max = 120)
    private String promptId;

    @Size(max = 64)
    private String skillId;

    @Size(max = 64)
    private String dimension;

    @Size(max = 32)
    private String scoreBand;

    @Size(max = 255)
    private String title;

    @NotBlank(message = "content is required")
    @Size(max = 8000, message = "Keep chunks small (~300-500 tokens)")
    private String content;

    public String getCorpus() {
      return corpus;
    }

    public void setCorpus(String corpus) {
      this.corpus = corpus;
    }

    public String getRefId() {
      return refId;
    }

    public void setRefId(String refId) {
      this.refId = refId;
    }

    public String getSubject() {
      return subject;
    }

    public void setSubject(String subject) {
      this.subject = subject;
    }

    public String getPromptId() {
      return promptId;
    }

    public void setPromptId(String promptId) {
      this.promptId = promptId;
    }

    public String getSkillId() {
      return skillId;
    }

    public void setSkillId(String skillId) {
      this.skillId = skillId;
    }

    public String getDimension() {
      return dimension;
    }

    public void setDimension(String dimension) {
      this.dimension = dimension;
    }

    public String getScoreBand() {
      return scoreBand;
    }

    public void setScoreBand(String scoreBand) {
      this.scoreBand = scoreBand;
    }

    public String getTitle() {
      return title;
    }

    public void setTitle(String title) {
      this.title = title;
    }

    public String getContent() {
      return content;
    }

    public void setContent(String content) {
      this.content = content;
    }
  }
}

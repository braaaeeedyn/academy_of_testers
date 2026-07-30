package com.aot.dto;

import java.util.List;

/** Structured, rubric-aligned grade returned to the client for display. */
public class FrqGradeResponse {

  private int earned;
  private int possible;
  private List<RowScore> rows;
  private String overallFeedback;
  private List<String> strengths;
  private List<String> improvements;
  private String strictnessNote;

  public FrqGradeResponse() {}

  public int getEarned() {
    return earned;
  }

  public void setEarned(int earned) {
    this.earned = earned;
  }

  public int getPossible() {
    return possible;
  }

  public void setPossible(int possible) {
    this.possible = possible;
  }

  public List<RowScore> getRows() {
    return rows;
  }

  public void setRows(List<RowScore> rows) {
    this.rows = rows;
  }

  public String getOverallFeedback() {
    return overallFeedback;
  }

  public void setOverallFeedback(String overallFeedback) {
    this.overallFeedback = overallFeedback;
  }

  public List<String> getStrengths() {
    return strengths;
  }

  public void setStrengths(List<String> strengths) {
    this.strengths = strengths;
  }

  public List<String> getImprovements() {
    return improvements;
  }

  public void setImprovements(List<String> improvements) {
    this.improvements = improvements;
  }

  public String getStrictnessNote() {
    return strictnessNote;
  }

  public void setStrictnessNote(String strictnessNote) {
    this.strictnessNote = strictnessNote;
  }

  /** Per-rubric-row outcome. */
  public static class RowScore {

    private String name;
    private int earned;
    private int max;
    private String justification;

    public RowScore() {}

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public int getEarned() {
      return earned;
    }

    public void setEarned(int earned) {
      this.earned = earned;
    }

    public int getMax() {
      return max;
    }

    public void setMax(int max) {
      this.max = max;
    }

    public String getJustification() {
      return justification;
    }

    public void setJustification(String justification) {
      this.justification = justification;
    }
  }
}

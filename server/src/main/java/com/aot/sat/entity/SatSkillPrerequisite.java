package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.util.Objects;

/** A directed edge: prerequisiteId is a prerequisite of skillId. */
@Entity
@Table(name = "sat_skill_prerequisites")
@IdClass(SatSkillPrerequisite.Key.class)
public class SatSkillPrerequisite {

  @Id
  @Column(name = "skill_id")
  private String skillId;

  @Id
  @Column(name = "prerequisite_id")
  private String prerequisiteId;

  @Column(nullable = false)
  private double strength;

  public String getSkillId() {
    return skillId;
  }

  public String getPrerequisiteId() {
    return prerequisiteId;
  }

  public double getStrength() {
    return strength;
  }

  public static class Key implements Serializable {
    private String skillId;
    private String prerequisiteId;

    public Key() {}

    @Override
    public boolean equals(Object o) {
      if (this == o) return true;
      if (!(o instanceof Key key)) return false;
      return Objects.equals(skillId, key.skillId)
          && Objects.equals(prerequisiteId, key.prerequisiteId);
    }

    @Override
    public int hashCode() {
      return Objects.hash(skillId, prerequisiteId);
    }
  }
}

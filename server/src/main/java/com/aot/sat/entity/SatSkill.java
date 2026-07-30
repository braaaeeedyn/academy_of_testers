package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** One of the eight Math domains. Seeded by Flyway V13. */
@Entity
@Table(name = "sat_skills")
public class SatSkill {

  @Id private String id;

  @Column(name = "parent_skill_id")
  private String parentSkillId;

  @Column(nullable = false)
  private String name;

  @Column(name = "display_order", nullable = false)
  private short displayOrder;

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public short getDisplayOrder() {
    return displayOrder;
  }
}

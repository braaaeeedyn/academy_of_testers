package com.aot.sat.service;

import com.aot.sat.dto.AdaptiveDtos.UserPrefs;
import com.aot.sat.entity.SatUserPrefs;
import com.aot.sat.repository.SatUserPrefsRepository;
import java.time.LocalDate;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Reads and upserts the per-user SAT dashboard preferences (test date, weekly goal). */
@Service
public class SatUserPrefsService {

  private final SatUserPrefsRepository repo;

  public SatUserPrefsService(SatUserPrefsRepository repo) {
    this.repo = repo;
  }

  public UserPrefs get(Long userId) {
    return repo.findById(userId).map(SatUserPrefsService::toDto).orElse(new UserPrefs(null, null));
  }

  @Transactional
  public UserPrefs save(Long userId, UserPrefs body) {
    SatUserPrefs prefs = repo.findById(userId).orElseGet(() -> new SatUserPrefs(userId));
    prefs.setTestDate(
        body.testDate() == null || body.testDate().isBlank()
            ? null
            : LocalDate.parse(body.testDate()));
    Integer goal = body.weeklyGoal();
    prefs.setWeeklyGoal(goal == null ? null : Math.min(7, Math.max(1, goal)));
    prefs.setUpdatedAt(LocalDateTime.now());
    return toDto(repo.save(prefs));
  }

  private static UserPrefs toDto(SatUserPrefs p) {
    return new UserPrefs(
        p.getTestDate() == null ? null : p.getTestDate().toString(), p.getWeeklyGoal());
  }
}

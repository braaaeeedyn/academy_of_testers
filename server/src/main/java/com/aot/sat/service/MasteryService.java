package com.aot.sat.service;

import com.aot.sat.dto.AdaptiveDtos.RecommendedSkill;
import com.aot.sat.dto.AdaptiveDtos.SkillWeight;
import com.aot.sat.engine.AdaptiveConstants;
import com.aot.sat.engine.ForgettingCurve;
import com.aot.sat.entity.SatSkill;
import com.aot.sat.entity.SatSkillWeight;
import com.aot.sat.repository.SatSkillRepository;
import com.aot.sat.repository.SatSkillWeightRepository;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

/**
 * The ONLY place skill weights are read. Applies the forgetting curve on every read (§4.3) so
 * callers never touch the raw stored value.
 */
@Service
public class MasteryService {

  private final SatSkillWeightRepository weightRepo;
  private final SatSkillRepository skillRepo;

  public MasteryService(SatSkillWeightRepository weightRepo, SatSkillRepository skillRepo) {
    this.weightRepo = weightRepo;
    this.skillRepo = skillRepo;
  }

  /** Decays a stored weight to now. */
  public static double decayed(SatSkillWeight w) {
    double days = Duration.between(w.getLastUpdated(), LocalDateTime.now()).toSeconds() / 86400.0;
    return ForgettingCurve.decay(w.getWeight(), days);
  }

  /** skill id -> decayed weight, for the whole vector. */
  public Map<String, Double> currentWeightMap(Long userId) {
    Map<String, Double> out = new HashMap<>();
    for (SatSkillWeight w : weightRepo.findByUserId(userId)) {
      out.put(w.getSkillId(), decayed(w));
    }
    return out;
  }

  /** The vector as sorted DTOs for the radar chart. Empty if the diagnostic isn't done. */
  public List<SkillWeight> mastery(Long userId) {
    Map<String, SatSkill> skills = new LinkedHashMap<>();
    skillRepo.findAll().forEach(s -> skills.put(s.getId(), s));
    return weightRepo.findByUserId(userId).stream()
        .map(
            w -> {
              SatSkill s = skills.get(w.getSkillId());
              double d = decayed(w);
              return new SkillWeight(
                  w.getSkillId(),
                  s != null ? s.getName() : w.getSkillId(),
                  s != null ? s.getDisplayOrder() : 0,
                  round(d),
                  d >= AdaptiveConstants.MASTERY_THRESHOLD,
                  round(w.getMaxWeight()),
                  w.getMaxWeightAt() == null
                      ? 0L
                      : w.getMaxWeightAt()
                          .atZone(java.time.ZoneId.systemDefault())
                          .toInstant()
                          .toEpochMilli());
            })
        .sorted(Comparator.comparingInt(SkillWeight::displayOrder))
        .toList();
  }

  /** The weakest, not-yet-mastered skills — surfaced as today's suggested focus. */
  public List<RecommendedSkill> recommended(Long userId, int limit) {
    return mastery(userId).stream()
        .filter(w -> !w.mastered())
        .sorted(Comparator.comparingDouble(SkillWeight::weight))
        .limit(limit)
        .map(w -> new RecommendedSkill(w.skillId(), w.skillName(), w.weight()))
        .toList();
  }

  /** Creates or overwrites weight rows from an initial vector (diagnostic init). */
  public void initialize(Long userId, Map<String, Double> initialWeights) {
    for (var e : initialWeights.entrySet()) {
      SatSkillWeight w =
          weightRepo
              .findByUserIdAndSkillId(userId, e.getKey())
              .orElseGet(() -> new SatSkillWeight(userId, e.getKey(), e.getValue()));
      w.setWeight(clampStore(e.getValue()));
      if (w.getWeight() > w.getMaxWeight()) {
        w.setMaxWeight(w.getWeight());
        w.setMaxWeightAt(LocalDateTime.now());
      }
      w.setLastUpdated(LocalDateTime.now());
      weightRepo.save(w);
    }
  }

  /** Loads a single skill's row (creating a default if missing), decayed to now. */
  public SatSkillWeight loadRow(Long userId, String skillId) {
    return weightRepo
        .findByUserIdAndSkillId(userId, skillId)
        .orElseGet(() -> new SatSkillWeight(userId, skillId, 0.5));
  }

  /** Persists an updated weight row, stamping last_updated. */
  public void persist(SatSkillWeight row, double newWeight, boolean correct, boolean bumpAttempt) {
    row.setWeight(clampStore(newWeight));
    if (row.getWeight() > row.getMaxWeight()) {
      row.setMaxWeight(row.getWeight());
      row.setMaxWeightAt(LocalDateTime.now());
    }
    if (bumpAttempt) {
      row.setAttempts(row.getAttempts() + 1);
      if (correct) row.setCorrectCount(row.getCorrectCount() + 1);
    }
    row.setLastUpdated(LocalDateTime.now());
    weightRepo.save(row);
  }

  private static double clampStore(double v) {
    return AdaptiveConstants.clamp(v, AdaptiveConstants.WEIGHT_LO, AdaptiveConstants.WEIGHT_HI);
  }

  private static double round(double v) {
    return Math.round(v * 1000.0) / 1000.0;
  }
}

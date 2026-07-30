package com.aot.sat.service;

import com.aot.sat.dto.AdaptiveDtos.StreakInfo;
import com.aot.sat.entity.SatStreakRepair;
import com.aot.sat.repository.SatDiagnosticResponseRepository;
import com.aot.sat.repository.SatResponseRepository;
import com.aot.sat.repository.SatStreakRepairRepository;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Daily-activity streak with repair tokens. Active days and earned repairs are derived from response
 * history; only spent repairs are stored. A repair restores one specific past missed day and can
 * only be spent on a day the student has already practiced.
 */
@Service
public class StreakService {

  /** Every three genuinely-active days earns one repair token. */
  private static final int DAYS_PER_REPAIR = 3;

  private final SatResponseRepository responseRepo;
  private final SatDiagnosticResponseRepository diagnosticResponseRepo;
  private final SatStreakRepairRepository repairRepo;

  public StreakService(
      SatResponseRepository responseRepo,
      SatDiagnosticResponseRepository diagnosticResponseRepo,
      SatStreakRepairRepository repairRepo) {
    this.responseRepo = responseRepo;
    this.diagnosticResponseRepo = diagnosticResponseRepo;
    this.repairRepo = repairRepo;
  }

  /** Calendar days the student actually answered a question (practice or diagnostic). */
  private Set<LocalDate> realActiveDates(Long userId) {
    Set<LocalDate> days = new HashSet<>();
    for (LocalDateTime t : responseRepo.answeredTimes(userId)) days.add(t.toLocalDate());
    for (LocalDateTime t : diagnosticResponseRepo.answeredTimes(userId)) days.add(t.toLocalDate());
    return days;
  }

  private Set<LocalDate> repairedDates(Long userId) {
    Set<LocalDate> days = new HashSet<>();
    for (SatStreakRepair r : repairRepo.findByUserId(userId)) days.add(r.getRepairedDate());
    return days;
  }

  private int earnedRepairs(int realActiveDayCount) {
    return realActiveDayCount / DAYS_PER_REPAIR;
  }

  /** Consecutive active days ending today (or yesterday, so the streak survives until day's end). */
  private int currentStreak(Set<LocalDate> effective, LocalDate today) {
    LocalDate d = effective.contains(today) ? today : today.minusDays(1);
    if (!effective.contains(d)) return 0;
    int count = 0;
    while (effective.contains(d)) {
      count++;
      d = d.minusDays(1);
    }
    return count;
  }

  private int longestStreak(Set<LocalDate> effective) {
    if (effective.isEmpty()) return 0;
    TreeSet<LocalDate> sorted = new TreeSet<>(effective);
    int longest = 1;
    int run = 1;
    LocalDate prev = null;
    for (LocalDate d : sorted) {
      if (prev != null && d.equals(prev.plusDays(1))) run++;
      else run = 1;
      longest = Math.max(longest, run);
      prev = d;
    }
    return longest;
  }

  public StreakInfo compute(Long userId, YearMonth month, LocalDate today) {
    Set<LocalDate> real = realActiveDates(userId);
    Set<LocalDate> repaired = repairedDates(userId);
    Set<LocalDate> effective = new HashSet<>(real);
    effective.addAll(repaired);

    int available = Math.max(0, earnedRepairs(real.size()) - repaired.size());
    boolean todayDone = real.contains(today);

    LocalDate firstActivity = real.stream().min(LocalDate::compareTo).orElse(null);

    List<String> activeDates = isoInMonth(real, month);
    List<String> repairedList = isoInMonth(repaired, month);

    // Repairable: past, missed, not already repaired, and on/after the first day the student
    // was ever active (no point "restoring" days before they started).
    Set<LocalDate> repairable = new HashSet<>();
    if (firstActivity != null) {
      LocalDate cursor = month.atDay(1);
      LocalDate end = month.atEndOfMonth();
      while (!cursor.isAfter(end)) {
        if (cursor.isBefore(today)
            && !cursor.isBefore(firstActivity)
            && !effective.contains(cursor)) {
          repairable.add(cursor);
        }
        cursor = cursor.plusDays(1);
      }
    }

    // The universal day boundary is 00:00 UTC. `serverNow` lets the client anchor its
    // rollover countdown to the server clock rather than the device clock.
    Instant serverNow = Instant.now();
    Instant nextDayUtc = today.plusDays(1).atStartOfDay(ZoneOffset.UTC).toInstant();

    return new StreakInfo(
        currentStreak(effective, today),
        longestStreak(effective),
        available,
        todayDone,
        real.size(),
        DAYS_PER_REPAIR,
        activeDates,
        repairedList,
        isoInMonth(repairable, month),
        serverNow.toString(),
        nextDayUtc.toString());
  }

  @Transactional
  public void repair(Long userId, LocalDate date, LocalDate today) {
    if (!date.isBefore(today)) {
      throw new IllegalArgumentException("You can only repair a day that has already passed.");
    }
    Set<LocalDate> real = realActiveDates(userId);
    if (!real.contains(today)) {
      throw new IllegalArgumentException("Complete today's question before repairing a past day.");
    }
    if (real.contains(date)) {
      throw new IllegalArgumentException("That day already counts — nothing to repair.");
    }
    if (repairRepo.existsByUserIdAndRepairedDate(userId, date)) {
      throw new IllegalArgumentException("That day has already been repaired.");
    }
    int available = earnedRepairs(real.size()) - (int) repairRepo.countByUserId(userId);
    if (available <= 0) {
      throw new IllegalArgumentException("You don't have any repairs available yet.");
    }
    repairRepo.save(new SatStreakRepair(userId, date));
  }

  private static List<String> isoInMonth(Set<LocalDate> dates, YearMonth month) {
    return new TreeSet<>(dates)
        .stream()
            .filter(d -> YearMonth.from(d).equals(month))
            .map(DateTimeFormatter.ISO_LOCAL_DATE::format)
            .toList();
  }
}

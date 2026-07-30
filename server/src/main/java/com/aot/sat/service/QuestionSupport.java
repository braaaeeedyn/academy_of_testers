package com.aot.sat.service;

import com.aot.sat.dto.AdaptiveDtos.AdaptiveQuestion;
import com.aot.sat.entity.SatQuestion;
import com.aot.sat.entity.SatSkill;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Component;

/** Parses stored jsonb options and builds the client-safe question DTO. */
@Component
public class QuestionSupport {

  private static final ObjectMapper MAPPER = new ObjectMapper();
  private static final TypeReference<List<String>> STRING_LIST = new TypeReference<>() {};

  public List<String> parseOptions(SatQuestion q) {
    try {
      return MAPPER.readValue(q.getOptions(), STRING_LIST);
    } catch (Exception e) {
      throw new IllegalStateException("Corrupt options for question " + q.getId(), e);
    }
  }

  /** Builds the pre-answer DTO — deliberately omits correctIndex, explanation, difficulty, IRT. */
  public AdaptiveQuestion toClient(SatQuestion q, Map<String, SatSkill> skills) {
    SatSkill s = skills.get(q.getSkillId());
    return new AdaptiveQuestion(
        q.getId(),
        q.getSkillId(),
        s != null ? s.getName() : q.getSkillId(),
        q.getAnswerType(),
        q.getStem(),
        parseOptions(q));
  }
}

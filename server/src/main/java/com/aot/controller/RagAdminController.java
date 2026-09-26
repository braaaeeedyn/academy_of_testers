package com.aot.controller;

import com.aot.dto.RagChunkRequest;
import com.aot.entity.RagChunk;
import com.aot.service.RagIngestionService;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 * Operator endpoints for loading and inspecting the RAG corpus. Lives under /api/ai so it inherits
 * the authenticated matcher, and is additionally gated by a shared ingest token (env
 * RAG_INGEST_TOKEN) since there is no admin role in this app. If the token is unset, ingestion is
 * refused outright rather than left open.
 */
@RestController
@RequestMapping("/api/ai/rag")
public class RagAdminController {

  private final RagIngestionService ingestionService;
  private final String ingestToken;

  public RagAdminController(
      RagIngestionService ingestionService, @Value("${rag.ingest-token:}") String ingestToken) {
    this.ingestionService = ingestionService;
    this.ingestToken = ingestToken;
  }

  @PostMapping("/chunks")
  public ResponseEntity<Map<String, Object>> ingest(
      @RequestHeader(value = "X-Ingest-Token", required = false) String token,
      @Valid @RequestBody RagChunkRequest request) {
    requireToken(token);
    int written = ingestionService.ingest(request.getChunks());
    return ResponseEntity.ok(Map.of("ingested", written));
  }

  @PostMapping("/reembed")
  public ResponseEntity<Map<String, Object>> reembed(
      @RequestHeader(value = "X-Ingest-Token", required = false) String token) {
    requireToken(token);
    int embedded = ingestionService.embedMissing();
    return ResponseEntity.ok(Map.of("embedded", embedded));
  }

  @GetMapping("/stats")
  public ResponseEntity<Map<String, Object>> stats(
      @RequestHeader(value = "X-Ingest-Token", required = false) String token) {
    requireToken(token);
    return ResponseEntity.ok(
        Map.of(
            "ap_rubric", ingestionService.countByCorpus(RagChunk.CORPUS_AP_RUBRIC),
            "ap_exemplar", ingestionService.countByCorpus(RagChunk.CORPUS_AP_EXEMPLAR),
            "curriculum", ingestionService.countByCorpus(RagChunk.CORPUS_CURRICULUM)));
  }

  @GetMapping("/chunk")
  public ResponseEntity<?> getChunk(
      @RequestHeader(value = "X-Ingest-Token", required = false) String token,
      @RequestParam String corpus,
      @RequestParam String refId) {
    requireToken(token);
    return ingestionService
        .find(corpus, refId)
        .<ResponseEntity<?>>map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  private void requireToken(String token) {
    if (ingestToken == null || ingestToken.isBlank()) {
      throw new ResponseStatusException(
          HttpStatus.FORBIDDEN, "RAG ingestion is disabled (RAG_INGEST_TOKEN not set)");
    }
    if (token == null || !constantTimeEquals(token, ingestToken)) {
      throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid ingest token");
    }
  }

  private static boolean constantTimeEquals(String a, String b) {
    byte[] x = a.getBytes(java.nio.charset.StandardCharsets.UTF_8);
    byte[] y = b.getBytes(java.nio.charset.StandardCharsets.UTF_8);
    return java.security.MessageDigest.isEqual(x, y);
  }
}

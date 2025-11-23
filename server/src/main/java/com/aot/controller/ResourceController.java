package com.aot.controller;

import com.aot.dto.StudyResourceDTO;
import com.aot.entity.StudyResource;
import com.aot.exception.ResourceNotFoundException;
import com.aot.repository.StudyResourceRepository;
import jakarta.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

  private final StudyResourceRepository resourceRepository;

  public ResourceController(StudyResourceRepository resourceRepository) {
    this.resourceRepository = resourceRepository;
  }

  @GetMapping
  public ResponseEntity<Map<String, Object>> searchResources(
      @RequestParam(required = false) Long subjectId,
      @RequestParam(required = false) String q,
      @RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "20") int size,
      @RequestParam(defaultValue = "createdAt,desc") String sort,
      HttpServletRequest request) {

    // Validate page and size
    if (page < 0) {
      throw new IllegalArgumentException("Page number cannot be negative");
    }
    if (size <= 0 || size > 100) {
      throw new IllegalArgumentException("Page size must be between 1 and 100");
    }

    // Parse sort parameter
    String[] sortParams = sort.split(",");
    String sortField = sortParams[0];
    Sort.Direction direction =
        sortParams.length > 1 && sortParams[1].equalsIgnoreCase("asc")
            ? Sort.Direction.ASC
            : Sort.Direction.DESC;

    Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortField));

    // Search resources
    Page<StudyResource> resourcePage = resourceRepository.searchResources(subjectId, q, pageable);

    // Build base URL for file URLs
    String baseUrl = getBaseUrl(request);

    // Convert to DTOs
    List<StudyResourceDTO> resources =
        resourcePage.getContent().stream()
            .map(r -> new StudyResourceDTO(r, baseUrl))
            .collect(Collectors.toList());

    // Build response with pagination metadata
    Map<String, Object> response = new HashMap<>();
    response.put("content", resources);
    response.put("page", resourcePage.getNumber());
    response.put("size", resourcePage.getSize());
    response.put("totalElements", resourcePage.getTotalElements());
    response.put("totalPages", resourcePage.getTotalPages());
    response.put("last", resourcePage.isLast());

    return ResponseEntity.ok(response);
  }

  @GetMapping("/{id}")
  public ResponseEntity<StudyResourceDTO> getResourceById(
      @PathVariable Long id, HttpServletRequest request) {
    StudyResource resource =
        resourceRepository
            .findById(id)
            .orElseThrow(
                () -> new ResourceNotFoundException("Study resource not found with id: " + id));

    String baseUrl = getBaseUrl(request);
    return ResponseEntity.ok(new StudyResourceDTO(resource, baseUrl));
  }

  private String getBaseUrl(HttpServletRequest request) {
    String scheme = request.getScheme();
    String serverName = request.getServerName();
    int serverPort = request.getServerPort();
    String contextPath = request.getContextPath();

    StringBuilder url = new StringBuilder();
    url.append(scheme).append("://").append(serverName);

    if ((scheme.equals("http") && serverPort != 80)
        || (scheme.equals("https") && serverPort != 443)) {
      url.append(":").append(serverPort);
    }

    url.append(contextPath);
    return url.toString();
  }
}

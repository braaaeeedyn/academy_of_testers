package com.aot.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

  private final SecretKey signingKey;
  private final long accessTokenExpirationMs;

  public JwtService(
      @Value("${jwt.secret}") String secret,
      @Value("${jwt.access-token-expiration-ms}") long accessTokenExpirationMs) {
    this.signingKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    this.accessTokenExpirationMs = accessTokenExpirationMs;
  }

  public String generateAccessToken(Long userId, String displayName) {
    Date now = new Date();
    Date expiry = new Date(now.getTime() + accessTokenExpirationMs);

    return Jwts.builder()
        .subject(userId.toString())
        .claim("displayName", displayName)
        .issuedAt(now)
        .expiration(expiry)
        .signWith(signingKey)
        .compact();
  }

  public Long extractUserId(String token) {
    Claims claims = parseToken(token);
    return Long.parseLong(claims.getSubject());
  }

  public boolean isTokenValid(String token) {
    try {
      parseToken(token);
      return true;
    } catch (JwtException | IllegalArgumentException e) {
      return false;
    }
  }

  private Claims parseToken(String token) {
    return Jwts.parser().verifyWith(signingKey).build().parseSignedClaims(token).getPayload();
  }
}

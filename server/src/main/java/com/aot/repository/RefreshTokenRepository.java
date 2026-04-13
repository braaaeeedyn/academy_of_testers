package com.aot.repository;

import com.aot.entity.RefreshToken;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

  Optional<RefreshToken> findByTokenHashAndRevokedFalse(String tokenHash);

  @Modifying
  @Query("UPDATE RefreshToken r SET r.revoked = true WHERE r.user.id = :userId")
  void revokeAllByUserId(Long userId);
}

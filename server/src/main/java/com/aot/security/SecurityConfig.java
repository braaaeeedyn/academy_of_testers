package com.aot.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  private final JwtAuthenticationFilter jwtAuthenticationFilter;

  public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
    this.jwtAuthenticationFilter = jwtAuthenticationFilter;
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable())
        .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin()))
        .sessionManagement(
            session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(
            auth ->
                auth
                    // Public endpoints
                    .requestMatchers("/api/auth/**")
                    .permitAll()
                    .requestMatchers("/api/health")
                    .permitAll()
                    .requestMatchers("/api/exams/**")
                    .permitAll()
                    .requestMatchers("/api/subjects/**")
                    .permitAll()
                    .requestMatchers("/api/resources/**")
                    .permitAll()
                    .requestMatchers("/api/contact")
                    .permitAll()
                    .requestMatchers("/actuator/**")
                    .permitAll()
                    // Protected endpoints
                    .requestMatchers("/api/ai/**")
                    .authenticated()
                    .requestMatchers("/api/users/**")
                    .authenticated()
                    .requestMatchers("/api/flashcards/**")
                    .authenticated()
                    .requestMatchers("/api/stacks/**")
                    .authenticated()
                    .requestMatchers("/api/progress/**")
                    .authenticated()
                    .requestMatchers("/api/sat/**")
                    .authenticated()
                    .requestMatchers("/api/ap/**")
                    .authenticated()
                    .anyRequest()
                    .permitAll())
        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder(12);
  }
}

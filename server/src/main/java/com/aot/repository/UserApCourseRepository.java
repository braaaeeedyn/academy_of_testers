package com.aot.repository;

import com.aot.entity.UserApCourse;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserApCourseRepository extends JpaRepository<UserApCourse, UserApCourse.Key> {

  List<UserApCourse> findByUserIdOrderByAddedAtAsc(Long userId);

  void deleteByUserId(Long userId);
}

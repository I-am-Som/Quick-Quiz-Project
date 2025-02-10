package com.som.quizApp.Repository;

import com.som.quizApp.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUserGmail(String email);

    // ✅ Fetch users sorted by score in descending order
    List<User> findAllByOrderByScoreDesc();
}

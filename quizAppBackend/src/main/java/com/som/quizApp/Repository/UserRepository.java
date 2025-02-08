package com.som.quizApp.Repository;

import com.som.quizApp.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUserGmail(String userGmail);
}

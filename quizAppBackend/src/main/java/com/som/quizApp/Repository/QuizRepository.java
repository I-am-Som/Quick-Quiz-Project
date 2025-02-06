package com.som.quizApp.Repository;

import com.som.quizApp.Entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface QuizRepository extends JpaRepository<Quiz, Integer> {

    Optional<Quiz> findById(Integer id);

    List<Quiz> findByCategory(String category);
}

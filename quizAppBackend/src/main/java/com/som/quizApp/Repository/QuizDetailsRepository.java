package com.som.quizApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizDetailsRepository extends JpaRepository<QuizDetails, Integer> {
    List<QuizDetails> findByCategory(String category);
}

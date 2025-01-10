package com.som.quizApp.Repository;

import com.som.quizApp.Entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Integer>{
}

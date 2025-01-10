package com.som.quizApp.Repository;

import com.som.quizApp.Entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface QuizRepository extends JpaRepository<Quiz, Integer>{

    Optional<Quiz> findById(Integer id);

}

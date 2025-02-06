package com.som.quizApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuizRepository extends JpaRepository<Quiz, Integer>{

    Optional<Quiz> findById(Integer id);

}

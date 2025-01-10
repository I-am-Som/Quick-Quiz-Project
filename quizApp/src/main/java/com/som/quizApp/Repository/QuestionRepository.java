package com.som.quizApp.Repository;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.som.quizApp.Entity.Question;
import org.hibernate.mapping.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
    List<Question> findByCategory(String category);

    @Query(value = "SELECT * FROM Question q WHERE q.category = :category ORDER BY RAND() LIMIT :numQ", nativeQuery = true)
    List<Question> getQuestionsByCategory(String category, int numQ);

}

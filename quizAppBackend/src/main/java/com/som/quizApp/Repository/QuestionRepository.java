package com.som.quizApp.Repository;

import com.som.quizApp.Entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

    List<Question> findByCategory(String category);

    // Fetch a limited number of random questions based on category and difficulty
    @Query(value = "SELECT * FROM question WHERE category = :category AND difficulty_level = :difficulty ORDER BY RAND() LIMIT :numQ", nativeQuery = true)
    List<Question> getQuestionsByCategory(
            @Param("category") String category,
            @Param("numQ") int numQ,
            @Param("difficulty") String difficulty
    );

    // Fetch random questions without difficulty filter (if not enough in primary query)
    @Query(value = "SELECT * FROM question WHERE category = :category ORDER BY RAND() LIMIT :numQ", nativeQuery = true)
    List<Question> getQuestionsByCategoryWithoutDifficulty(
            @Param("category") String category,
            @Param("numQ") int numQ
    );
}

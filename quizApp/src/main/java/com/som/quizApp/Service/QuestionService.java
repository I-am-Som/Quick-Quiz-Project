package com.som.quizApp.Service;

import com.som.quizApp.Entity.Question;
import org.springframework.http.ResponseEntity;

import java.util.List;


public interface QuestionService {

    ResponseEntity<List<Question>> getAllQuestions();
    ResponseEntity<List<Question>> getQuestionsByCategory(String category);
    ResponseEntity<String> addQuestions(Question question);
}

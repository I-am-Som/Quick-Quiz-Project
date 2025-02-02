package com.som.quizApp.Service;

import com.som.quizApp.Entity.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface QuizService {

    ResponseEntity<String> createQuiz(String category, int numQ, String title);

    ResponseEntity<List<QuestionWrapper>> getQuiz(Integer id);

    ResponseEntity<Integer> getResult(Integer id, List<Response> responses);

    // New method to get all quizzes for quiz cards
    ResponseEntity<List<QuizDetails>> getAllQuizzes();
}

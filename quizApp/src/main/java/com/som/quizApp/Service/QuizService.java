package com.som.quizApp.Service;

import org.springframework.http.ResponseEntity;

public interface QuizService {

    ResponseEntity<String> createQuiz(String category, int numQ, String title);
}

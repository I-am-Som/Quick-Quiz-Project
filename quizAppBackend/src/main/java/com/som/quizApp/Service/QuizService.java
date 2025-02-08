package com.som.quizApp.Service;

import com.som.quizApp.Entity.Question;
import com.som.quizApp.Entity.Response;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface QuizService {

    ResponseEntity<String> createQuiz(String category, int numQ, String title, String difficulty);

    ResponseEntity<List<Question>> getQuiz(Integer id);

    ResponseEntity<Integer> getResult(Integer id, List<Response> responses);

    ResponseEntity<String> saveQuizDetails(String category, String name, Integer numberOfQuestions, String difficulty);

    ResponseEntity<List<Map<String, Object>>> getAllQuizzes();  // Updated: Return simplified quiz details

    ResponseEntity<List<Map<String, Object>>> getQuizzesByCategory(String category);
}

package com.som.quizApp.Service;

import com.som.quizApp.Entity.Question;
import com.som.quizApp.Entity.QuestionWrapper;
import com.som.quizApp.Entity.Response;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface QuizService {

    ResponseEntity<String> createQuiz(String category, int numQ, String title);

    ResponseEntity<List<QuestionWrapper>> getQuiz(Integer id);

    ResponseEntity<Integer> getResult(Integer id, List<Response> responses);
}

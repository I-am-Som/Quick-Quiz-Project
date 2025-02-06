package com.som.quizApp.Controller;

import com.som.quizApp.Service.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/quiz-cards")
public class QuizCardController {

    private final QuizService quizService;

    public QuizCardController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Map<String, Object>>> getAllQuizCards() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Map<String, Object>>> getQuizCardsByCategory(@PathVariable String category) {
        return quizService.getQuizzesByCategory(category);
    }
}

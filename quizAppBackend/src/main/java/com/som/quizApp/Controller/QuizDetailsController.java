package com.som.quizApp.Controller;

import com.som.quizApp.Entity.QuizDetails;
import com.som.quizApp.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("quizdetails")
public class QuizDetailsController {

    private final QuizService quizService;

    @Autowired
    public QuizDetailsController(QuizService quizService) {
        this.quizService = quizService;
    }

    // Get all quizzes
    @GetMapping("all")
    public ResponseEntity<List<QuizDetails>> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    // Get quizzes by category
    @GetMapping("category/{category}")
    public ResponseEntity<List<QuizDetails>> getQuizzesByCategory(@PathVariable String category) {
        return quizService.getQuizzesByCategory(category);
    }
}

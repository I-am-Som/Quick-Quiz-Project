package com.som.quizApp.Controller;

import com.som.quizApp.Entity.Question;
import com.som.quizApp.Entity.Response;
import com.som.quizApp.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    // ✅ Create a new quiz
    @PostMapping("/create")
    public ResponseEntity<String> createQuiz(
            @RequestParam String category,
            @RequestParam int numQ,
            @RequestParam String title,
            @RequestParam String difficulty) {
        return quizService.createQuiz(category, numQ, title, difficulty);
    }

    // ✅ Get quiz questions by ID
    @GetMapping("/{id}")
    public ResponseEntity<List<Question>> getQuiz(@PathVariable Integer id) {
        return quizService.getQuiz(id);
    }

    // ✅ Submit quiz responses and get the score
    @PostMapping("/submit/{id}")
    public ResponseEntity<Integer> submitQuiz(
            @PathVariable Integer id,
            @RequestBody List<Response> responses) {
        return quizService.getResult(id, responses);
    }
}

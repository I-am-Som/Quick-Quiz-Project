package com.som.quizApp.Service;

import com.som.quizApp.Entity.Question;
import com.som.quizApp.Entity.Quiz;
import com.som.quizApp.Entity.Response;
import com.som.quizApp.Repository.QuestionRepository;
import com.som.quizApp.Repository.QuizRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class QuizServiceImp implements QuizService {

    private final QuizRepository quizRepository;
    private final QuestionRepository questionRepository;

    public QuizServiceImp(QuizRepository quizRepository, QuestionRepository questionRepository) {
        this.quizRepository = quizRepository;
        this.questionRepository = questionRepository;
    }

    @Override
    public ResponseEntity<String> createQuiz(String category, int numQ, String title, String difficulty) {
        List<Question> questions = questionRepository.getQuestionsByCategory(category, numQ, difficulty);

        // If not enough questions are found, try getting additional ones without difficulty filter
        if (questions.size() < numQ) {
            int remainingQuestions = numQ - questions.size();
            List<Question> additionalQuestions = questionRepository.getQuestionsByCategoryWithoutDifficulty(category, remainingQuestions);
            questions.addAll(additionalQuestions);
        }

        if (questions.isEmpty()) {
            return new ResponseEntity<>("No questions available for this category.", HttpStatus.NOT_FOUND);
        }

        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setCategory(category);
        quiz.setDifficulty(difficulty);
        quiz.setNumberOfQuestions(questions.size());  // Update count in case fewer questions were fetched
        quiz.setQuestions(questions);
        quizRepository.save(quiz);

        return new ResponseEntity<>("Quiz created successfully!", HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<List<Question>> getQuiz(Integer id) {
        Optional<Quiz> quizOptional = quizRepository.findById(id);

        if (quizOptional.isPresent()) {
            return new ResponseEntity<>(quizOptional.get().getQuestions(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<Integer> getResult(Integer id, List<Response> responses) {
        Optional<Quiz> quizOptional = quizRepository.findById(id);
        if (quizOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Question> questionsOfQuiz = quizOptional.get().getQuestions();
        int score = (int) responses.stream()
                .filter(response -> questionsOfQuiz.stream()
                        .anyMatch(q -> q.getId().equals(response.getQuestionId()) &&
                                q.getRightAnswer().equals(response.getSelectedAnswer())))  // Updated to match Response entity
                .count();

        return new ResponseEntity<>(score, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> saveQuizDetails(String category, String title, Integer numberOfQuestions, String difficulty) {
        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setCategory(category);
        quiz.setDifficulty(difficulty);
        quiz.setNumberOfQuestions(numberOfQuestions);
        quizRepository.save(quiz);

        return new ResponseEntity<>("Quiz details saved successfully!", HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<List<Map<String, Object>>> getAllQuizzes() {
        List<Quiz> quizzes = quizRepository.findAll();
        if (quizzes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        List<Map<String, Object>> simplifiedQuizzes = quizzes.stream().map(quiz -> {
            Map<String, Object> quizInfo = new HashMap<>();
            quizInfo.put("id", quiz.getId());
            quizInfo.put("title", quiz.getTitle());
            quizInfo.put("category", quiz.getCategory());
            quizInfo.put("difficulty", quiz.getDifficulty());
            quizInfo.put("numberOfQuestions", quiz.getNumberOfQuestions());
            return quizInfo;
        }).collect(Collectors.toList());

        return new ResponseEntity<>(simplifiedQuizzes, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Map<String, Object>>> getQuizzesByCategory(String category) {
        List<Quiz> quizzes = quizRepository.findByCategory(category);
        if (quizzes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        List<Map<String, Object>> simplifiedQuizzes = quizzes.stream().map(quiz -> {
            Map<String, Object> quizInfo = new HashMap<>();
            quizInfo.put("id", quiz.getId());
            quizInfo.put("title", quiz.getTitle());
            quizInfo.put("difficulty", quiz.getDifficulty());
            quizInfo.put("numberOfQuestions", quiz.getNumberOfQuestions());
            return quizInfo;
        }).collect(Collectors.toList());

        return new ResponseEntity<>(simplifiedQuizzes, HttpStatus.OK);
    }
}

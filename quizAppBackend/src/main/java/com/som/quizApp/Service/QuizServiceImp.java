package com.som.quizApp.Service;

import com.som.quizApp.Entity.Response;
import com.som.quizApp.Repository.QuestionRepository;
import com.som.quizApp.Repository.QuizRepository;
import com.som.quizApp.Repository.QuizDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizServiceImp implements QuizService {

    @Autowired
    QuizRepository quizRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    QuizDetailsRepository quizDetailsRepository; // Add repository for QuizDetails

    // Existing methods...

    @Override
    public ResponseEntity<String> createQuiz(String category, int numQ, String title) {
        // Get questions based on category
        List<Question> questions = questionRepository.getQuestionsByCategory(category, numQ);

        // Create the Quiz
        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        quizRepository.save(quiz);

        // Save quiz details
        saveQuizDetails(category, title, numQ); // Save quiz details to QuizDetails table

        return new ResponseEntity<>("Created Quiz", HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<List<QuestionWrapper>> getQuiz(Integer id) {
        Optional<Quiz> quizOptional = quizRepository.findById(id);
        if (quizOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404 if the quiz ID does not exist
        }

        Quiz quiz = quizOptional.get();
        List<Question> questionsFromDB = quiz.getQuestions();
        List<QuestionWrapper> questionForUser = new ArrayList<>();

        // Prepare the question list for user
        for (Question q : questionsFromDB) {
            QuestionWrapper qw = new QuestionWrapper(q.getId(), q.getQuestionTitle(), q.getOption1(), q.getOption2(), q.getOption3(), q.getOption4());
            questionForUser.add(qw);
        }

        return new ResponseEntity<>(questionForUser, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Integer> getResult(Integer id, List<Response> responses) {
        Optional<Quiz> quiz = Optional.of(quizRepository.findById(id).get());
        List<Question> questionsOftheQuiz = quiz.get().getQuestions();
        int score = 0;
        int i = 0;
        for (Response r : responses) {
            if (r.getResponse().equals(questionsOftheQuiz.get(i).getRightAnswer())) {
                score++;
            }
            i++;
        }
        return new ResponseEntity<>(score, HttpStatus.OK);
    }

    // New method to save quiz details to QuizDetails table
    public ResponseEntity<String> saveQuizDetails(String category, String name, Integer numberOfQuestions) {
        QuizDetails quizDetails = new QuizDetails();
        quizDetails.setCategory(category);
        quizDetails.setName(name);
        quizDetails.setNumberOfQuestions(numberOfQuestions);

        quizDetailsRepository.save(quizDetails);
        return new ResponseEntity<>("Quiz details saved successfully!", HttpStatus.CREATED);
    }

    // New method to get all quizzes
    public ResponseEntity<List<QuizDetails>> getAllQuizzes() {
        List<QuizDetails> quizzes = quizDetailsRepository.findAll();
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }

    // New method to get quizzes by category
    public ResponseEntity<List<QuizDetails>> getQuizzesByCategory(String category) {
        List<QuizDetails> quizzes = quizDetailsRepository.findByCategory(category);
        return new ResponseEntity<>(quizzes, HttpStatus.OK);
    }
}

package com.som.quizApp.Service;

import com.som.quizApp.Entity.Question;
import com.som.quizApp.Entity.Quiz;
import com.som.quizApp.Repository.QuestionRepository;
import com.som.quizApp.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizServiceImp implements QuizService{

    @Autowired
    QuizRepository quizRepository;
    @Autowired
    QuestionRepository questionRepository;

    @Override
    public ResponseEntity<String> createQuiz(String category, int numQ, String title) {

        List<Question> questions = questionRepository.getQuestionsByCategory(category, numQ);

        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questions);
        quizRepository.save(quiz);

        try{
            return new ResponseEntity<>("Created Quiz", HttpStatus.CREATED);
        } catch(Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed to create quiz", HttpStatus.BAD_REQUEST);
    }

}

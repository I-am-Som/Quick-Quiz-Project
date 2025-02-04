package com.som.quizApp.Service;

import com.som.quizApp.Entity.Leaderboard;
import com.som.quizApp.Repository.LeaderboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LeaderboardServiceImp implements LeaderboardService {

    @Autowired
    private LeaderboardRepository leaderboardRepository;


    @Override
    public ResponseEntity<List<Leaderboard>> getLeaderboard() {
        try {
            List<Leaderboard> leaders = leaderboardRepository.findTop10ByOrderByScoreDesc();
            return new ResponseEntity<>(leaders, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Error occurred while fetching leaderboard: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Override
    public ResponseEntity<String> addScore(String name, String country, int score) {
        Leaderboard leaderboard = new Leaderboard(name, country, score);
        leaderboardRepository.save(leaderboard);
        return new ResponseEntity<>("Score added successfully", HttpStatus.CREATED);
    }
}

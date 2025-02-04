package com.som.quizApp.Service;

import com.som.quizApp.Entity.Leaderboard;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface LeaderboardService {
    ResponseEntity<List<Leaderboard>> getLeaderboard();
    ResponseEntity<String> addScore(String name, String country, int score);
}

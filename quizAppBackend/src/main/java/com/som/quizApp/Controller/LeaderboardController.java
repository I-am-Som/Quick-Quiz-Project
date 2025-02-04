package com.som.quizApp.Controller;

import com.som.quizApp.Entity.Leaderboard;
import com.som.quizApp.Service.LeaderboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {

    @Autowired
    private LeaderboardService leaderboardService;

    @GetMapping("/get")
    public List<Leaderboard> getLeaderboard() {
        return leaderboardService.getLeaderboard().getBody();
    }

    @PostMapping("/add")
    public String addScore(@RequestParam String name,
                           @RequestParam String country,
                           @RequestParam int score) {
        return leaderboardService.addScore(name, country, score).getBody();
    }
}

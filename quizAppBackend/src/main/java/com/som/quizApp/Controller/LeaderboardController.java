package com.som.quizApp.Controller;

import com.som.quizApp.Entity.User;
import com.som.quizApp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {

    @Autowired
    private UserService userService;

    // ✅ Fetch the leaderboard
    @GetMapping
    public ResponseEntity<List<User>> getLeaderboard() {
        List<User> leaderboard = userService.getLeaderboard();
        return ResponseEntity.ok(leaderboard);
    }
}

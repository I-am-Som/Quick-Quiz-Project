package com.som.quizApp.Service;

import com.som.quizApp.Entity.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    Optional<User> findByEmail(String email);
    Optional<User> findById(String userId);
    User registerUser(User user);

    // ✅ Leaderboard method
    List<User> getLeaderboard();
}

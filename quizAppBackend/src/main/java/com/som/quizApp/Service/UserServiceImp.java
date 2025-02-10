package com.som.quizApp.Service;

import com.som.quizApp.Entity.User;
import com.som.quizApp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByUserGmail(email);
    }

    @Override
    public Optional<User> findById(String userId) {
        return userRepository.findById(userId);
    }

    @Override
    public User registerUser(User user) {
        if (userRepository.findByUserGmail(user.getUserGmail()).isPresent()) {
            throw new RuntimeException("User with this email already exists");
        }
        return userRepository.save(user);
    }

    // ✅ Fetch leaderboard: Users sorted by score (highest first)
    @Override
    public List<User> getLeaderboard() {
        return userRepository.findAllByOrderByScoreDesc();
    }
}

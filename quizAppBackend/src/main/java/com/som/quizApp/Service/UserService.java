package com.som.quizApp.Service;

import com.som.quizApp.Entity.User;
import java.util.Optional;

public interface UserService {
    Optional<User> findByEmail(String email);
}

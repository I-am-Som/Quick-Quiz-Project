package com.som.quizApp.Controller;

import com.som.quizApp.Entity.User;
import com.som.quizApp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Optional<User> userOptional = userService.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return ResponseEntity.ok(Map.of(
                        "message", "Login successful",
                        "userId", user.getUserId(),
                        "userName", user.getUserName(),
                        "userGmail", user.getUserGmail()
                ));
            } else {
                return ResponseEntity.status(401).body(Map.of("message", "Incorrect password"));
            }
        }
        return ResponseEntity.status(404).body(Map.of("message", "User not found"));
    }
}

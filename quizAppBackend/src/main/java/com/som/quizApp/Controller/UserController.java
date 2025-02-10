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

    // ✅ Login Endpoint
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

    // ✅ Register (Sign-up) Endpoint
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User newUser = userService.registerUser(user);
            return ResponseEntity.ok(Map.of(
                    "message", "User registered successfully",
                    "userId", newUser.getUserId(),
                    "userName", newUser.getUserName(),
                    "userGmail", newUser.getUserGmail()
            ));
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body(Map.of("message", e.getMessage()));
        }
    }

    // ✅ Get Username by User ID
    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserName(@PathVariable String userId) {
        Optional<User> userOptional = userService.findById(userId);
        if (userOptional.isPresent()) {
            return ResponseEntity.ok(Map.of("userName", userOptional.get().getUserName()));
        }
        return ResponseEntity.status(404).body(Map.of("message", "User not found"));
    }
}

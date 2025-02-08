package com.som.quizApp.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import java.security.SecureRandom;

@Entity
public class User {

    @Id
    private String userId;
    private String userName;
    private String userGmail;
    private String password;
    private String country;
    private int score;

    public User() {
        this.userId = generateHexId();
    }

    public User(String userName, String userGmail, String password, String country, int score) {
        this.userId = generateHexId();
        this.userName = userName;
        this.userGmail = userGmail;
        this.password = password;
        this.country = country;
        this.score = score;
    }

    private String generateHexId() {
        SecureRandom random = new SecureRandom();
        StringBuilder hexId = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            int digit = random.nextInt(16);
            hexId.append(Integer.toHexString(digit).toUpperCase());
        }
        return hexId.toString();
    }

    public String getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserGmail() {
        return userGmail;
    }

    public void setUserGmail(String userGmail) {
        this.userGmail = userGmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", userName='" + userName + '\'' +
                ", userGmail='" + userGmail + '\'' +
                ", password='" + password + '\'' +
                ", country='" + country + '\'' +
                ", score=" + score +
                '}';
    }
}

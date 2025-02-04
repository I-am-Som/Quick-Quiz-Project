package com.som.quizApp.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "leaderboard")
public class Leaderboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String country;
    private int score;

    // Constructors
    public Leaderboard() {}

    public Leaderboard(String name, String country, int score) {
        this.name = name;
        this.country = country;
        this.score = score;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
}

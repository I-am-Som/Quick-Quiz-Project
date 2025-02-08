package com.som.quizApp.Entity;

public class Response {
    private Integer questionId;     // Identifies the specific question
    private String selectedAnswer;  // Stores the user's selected answer

    public Response() {
    }

    public Response(Integer questionId, String selectedAnswer) {
        this.questionId = questionId;
        this.selectedAnswer = selectedAnswer;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getSelectedAnswer() {
        return selectedAnswer;
    }

    public void setSelectedAnswer(String selectedAnswer) {
        this.selectedAnswer = selectedAnswer;
    }

    @Override
    public String toString() {
        return "Response{" +
                "questionId=" + questionId +
                ", selectedAnswer='" + selectedAnswer + '\'' +
                '}';
    }
}

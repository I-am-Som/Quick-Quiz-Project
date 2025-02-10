import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";  // Import Quiz Context

function SearchQuiz() {
  const [quizCardDetails, setQuizCardDetails] = useState([]);
  const API_URL = "http://localhost:8080/quiz-cards/all";
  const { setQuizID } = useQuiz();  // Get setQuizID from context

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setQuizCardDetails(data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col pt-[60px] bg-[#FFF9C4] overflow-auto">
      <div className="flex flex-wrap justify-center items-center gap-6 p-6">
        {quizCardDetails.length > 0 ? (
          quizCardDetails.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              setQuizID={setQuizID}  // Pass setQuizID to the child
            />
          ))
        ) : (
          <p className="text-[#795548] text-lg font-semibold">No quizzes available</p>
        )}
      </div>
    </div>
  );
}

function QuizCard({ quiz, setQuizID }) {
  return (
    <div className="w-[250px] h-[340px] bg-[#FFF59D] rounded-lg flex flex-col justify-between items-center p-5 
                    ">
      <div className="text-center space-y-2">
        <p className="text-xl font-bold text-[#795548]">{quiz.title}</p>
        <p className="text-md text-[#8D6E63]">Category: {quiz.category}</p>
        <p className="text-md text-[#8D6E63]">{quiz.numberOfQuestions} Questions</p>
        <p className="text-md text-[#8D6E63]">Difficulty: {quiz.difficulty}</p>
      </div>
      <Link
        to="/quiz"
        className="px-5 py-2 bg-[#FBC02D] text-white font-semibold rounded-md 
                   hover:bg-[#F9A825] transition-all duration-200"
        onClick={() => setQuizID(quiz.id)}  // Set the quiz ID when clicked
      >
        Take Quiz
      </Link>
    </div>
  );
}

export default SearchQuiz;

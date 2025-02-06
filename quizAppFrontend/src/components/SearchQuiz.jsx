import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizSearch() {
  // Use the correct state variable name
  const [quizCardDetails, setQuizCardDetails] = useState([]);
  const API_URL = "http://localhost:8080/quiz-cards/all"; // Updated URL

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuizCardDetails(data); // Corrected the state update function
        console.log(data);
      })
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-90 flex flex-col pt-[60px] overflow-auto">
      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        {quizCardDetails.length > 0 ? (
          quizCardDetails.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quizname={quiz.name}
              category={quiz.category}
              numQ={quiz.number_of_questions}
              difficulty={quiz.difficulty_level}
            />
          ))
        ) : (
          <p className="text-gray-200 text-lg">No quizzes available</p>
        )}
      </div>
    </div>
  );
}

function QuizCard({ quizname, category, numQ, difficulty }) {
  return (
    <div className="w-[220px] h-[320px] rounded-lg bg-yellow-50/90 backdrop-blur-md flex flex-col justify-between items-center p-6 shadow-lg border border-gray-200">
      <div className="text-center">
        <p className="text-xl font-bold text-gray-800">{quizname}</p>
        <p className="text-md text-gray-600">Category: {category}</p>
        <p className="text-md text-gray-500">{numQ} Questions</p>
        <p className="text-md text-gray-500">Difficulty: {difficulty}</p>
      </div>
      <Link
        to="/quiz"
        className="px-5 py-2 bg-yellow-500 rounded-lg text-white font-semibold hover:bg-yellow-600 transition duration-200"
      >
        Take Quiz
      </Link>
    </div>
  );
}

export default QuizSearch;

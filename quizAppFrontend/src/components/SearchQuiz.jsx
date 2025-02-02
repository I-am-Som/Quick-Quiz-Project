import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuizSearch() {
  const [quizzes, setQuizzes] = useState([]);
  const API_URL = "http://localhost:8080/quiz/all"; // Change this to match your backend route

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  return (
    <div className="h-full w-full flex flex-wrap justify-center items-center gap-4">
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <QuizDetails
            key={quiz.id}
            quizname={quiz.title}
            category={quiz.category}
            numQ={quiz.numQuestions}
          />
        ))
      ) : (
        <p className="text-gray-600">No quizzes available</p>
      )}
    </div>
  );
}

function QuizDetails({ quizname, category, numQ }) {
  return (
    <div className="h-[180px] w-[320px] rounded-lg bg-slate-50/50 backdrop-blur-sm flex flex-col justify-center items-center font-semibold font-sans text-md shadow-md">
      <p>{quizname}</p>
      <p>{category}</p>
      <p>{numQ} Questions</p>
      <Link
        to="/quiz"
        className="h-10 w-20 bg-yellow-500 rounded-md flex justify-center items-center hover:bg-black hover:text-white"
      >
        Take Quiz
      </Link>
    </div>
  );
}

export default QuizSearch;

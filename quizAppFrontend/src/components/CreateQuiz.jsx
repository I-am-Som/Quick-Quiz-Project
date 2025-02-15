import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuiz() {
  const [quizTitle, setQuizTitle] = useState("");
  const [category, setCategory] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ quizTitle, category, numQuestions, difficulty });
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#FFF9C4] p-8">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto w-full bg-[#FFF59D] p-8 rounded-lg shadow-lg">
        <h2 className="text-[#795548] text-3xl font-bold text-center mb-6">Create a New Quiz</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#4E342E] font-medium">Quiz Title</label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 bg-[#FFF176] border border-[#8D6E63] rounded focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
          </div>
          <div>
            <label className="block text-[#4E342E] font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 bg-[#FFF176] border border-[#8D6E63] rounded focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
          </div>
          <div>
            <label className="block text-[#4E342E] font-medium">Number of Questions</label>
            <input
              type="number"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 bg-[#FFF176] border border-[#8D6E63] rounded focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            />
          </div>
          <div>
            <label className="block text-[#4E342E] font-medium">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-3 py-2 mt-1 bg-[#FFF176] border border-[#8D6E63] rounded focus:outline-none focus:ring-2 focus:ring-[#8D6E63]"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF7043] hover:bg-[#F4511E] text-white font-bold py-2 rounded transition"
          >
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuiz;

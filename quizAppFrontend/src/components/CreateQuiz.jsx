import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuiz() {
  const [quizTitle, setQuizTitle] = useState("");
  const [category, setCategory] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!quizTitle) newErrors.quizTitle = "Quiz Title is required";
    if (!category) newErrors.category = "Category is required";
    if (!numQuestions || numQuestions < 1) newErrors.numQuestions = "Number of Questions must be at least 1";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({ quizTitle, category, numQuestions, difficulty });
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
          Create a New Quiz
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Quiz Title</label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              placeholder="Enter quiz title"
              required
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.quizTitle ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all`}
            />
            {errors.quizTitle && <p className="text-red-500 text-sm mt-2">{errors.quizTitle}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              required
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.category ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all`}
            />
            {errors.category && <p className="text-red-500 text-sm mt-2">{errors.category}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Number of Questions</label>
            <input
              type="number"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              placeholder="Enter number of questions"
              required
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.numQuestions ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all`}
            />
            {errors.numQuestions && <p className="text-red-500 text-sm mt-2">{errors.numQuestions}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-bold py-3 rounded-lg hover:from-amber-600 hover:to-yellow-500 transition-all transform hover:scale-105"
          >
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuiz;
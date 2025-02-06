import { createContext, useState, useContext } from "react";

// Create the context
const QuizContext = createContext();

// Custom hook to use QuizContext
export function useQuiz() {
  return useContext(QuizContext);
}

// Provider component
export function QuizProvider({ children }) {
  const [quizID, setQuizID] = useState(null);

  return (
    <QuizContext.Provider value={{ quizID, setQuizID }}>
      {children}
    </QuizContext.Provider>
  );
}

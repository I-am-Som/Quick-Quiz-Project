import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";  // Import Context Provider
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SearchQuiz from "./components/SearchQuiz";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Hero from "./components/Hero";

const imgURL = "https://cdn.pixabay.com/photo/2021/06/02/18/04/education-6305113_1280.jpg";

function App() {
  return (
    <QuizProvider> {/* Wrap everything inside the context provider */}
      <div
  style={{
    backgroundImage: `url(${imgURL})`, // Use backticks ``
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </QuizProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const noNavRoutes = ["/login", "/signup", "/quiz", "/hero"];

  return (
    <>
      {!noNavRoutes.includes(location.pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchquiz" element={<SearchQuiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
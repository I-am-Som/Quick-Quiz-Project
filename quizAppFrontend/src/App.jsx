import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";  // Import Quiz Context
import { AuthProvider } from "./context/AuthContext";  // Import Auth Context
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SearchQuiz from "./components/SearchQuiz";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Hero from "./components/Hero";
import CreateQuiz from "./components/CreateQuiz";

const imgURL = "https://cdn.pixabay.com/photo/2021/06/02/18/04/education-6305113_1280.jpg";

function App() {
  return (
    <AuthProvider>  {/* Wrap Auth Context */}
      <QuizProvider> {/* Wrap Quiz Context */}
        <div
          style={{
            backgroundImage: `url(${imgURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </div>
      </QuizProvider>
    </AuthProvider>
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
        <Route path="/createquiz" element={<CreateQuiz />} />
      </Routes>
    </>
  );
}

export default App;

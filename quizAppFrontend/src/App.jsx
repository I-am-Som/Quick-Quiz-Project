import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Signup from './components/Signup';
import SearchQuiz from './components/SearchQuiz';
import Nav from './components/Nav';
import Home from './components/Home';
import Hero from './components/Hero';

const imgURL = "https://cdn.pixabay.com/photo/2021/06/02/18/04/education-6305113_1280.jpg";
function App() {
  return (
    <div
    style={{
      backgroundImage: `url(${imgURL})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
     className="h-screen w-screen">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Using a basic if-else statement
  if (location.pathname === "/login" || location.pathname === "/quiz" || location.pathname === "/hero" || location.pathname ==="/signup") {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    );
  } else {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/searchquiz" element={<SearchQuiz />} />
          {/* <Route path="/score" element={<Score />} />
          <Route path="/savedtest" element={<SavedTest />} /> */}
        </Routes>
      </>
    );
  }
}

export default App;

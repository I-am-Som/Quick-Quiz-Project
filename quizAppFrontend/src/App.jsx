import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Quiz from './components/Quiz';
import Login from './components/Login';
import QuizSettings from './components/QuizSettings';
import Nav from './components/Nav';
import Home from './components/Home';
import Hero from './components/Hero';

function App() {
  return (
    <div className="h-screen w-screen bg-[#e6ded6]">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Using a basic if-else statement
  if (location.pathname === "/login" || location.pathname === "/quiz" || location.pathname === "/hero") {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
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
          <Route path="/taketest" element={<QuizSettings />} />
          {/* <Route path="/score" element={<Score />} />
          <Route path="/savedtest" element={<SavedTest />} /> */}
        </Routes>
      </>
    );
  }
}

export default App;

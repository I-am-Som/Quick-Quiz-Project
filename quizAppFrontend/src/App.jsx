import React from 'react';
import { useState } from 'react';
import Quiz from './components/Quiz'; // Fixed import path
import Login from "./components/Login";
import QuizSettings from './components/QuizSettings';

function App() {
  return (
    <div className="h-screen w-screen">
      <QuizSettings />
    </div>
  );
}

export default App;
 
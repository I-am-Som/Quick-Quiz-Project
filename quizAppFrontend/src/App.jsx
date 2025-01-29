import React from 'react';
import { useState } from 'react';
import Quiz from './components/Quiz'; // Fixed import path
import Login from "./components/Login";

function App() {
  return (
    <div className="h-screen w-screen">
      <Login />
      <Quiz />
    </div>
  );
}

export default App;
 
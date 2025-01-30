import React from 'react';
import { useState } from 'react';
import Quiz from './components/Quiz'; // Fixed import path
import Login from "./components/Login";
import QuizSettings from './components/QuizSettings';

function App() {
  return (
    <div className="h-screen w-screen">
      
      {/* <nav className="w-full h-12 bg-yellow-500 flex absolute">
        <div></div>
        <div className="h-full w-20 ml-[65%] active:bg-black hover:bg-yellow-400 flex justify-center items-center"><p>home</p></div>
        <div className="h-full w-20 active:bg-black hover:bg-yellow-400 flex justify-center items-center"><p>home</p></div>
        <div className="h-full w-20 active:bg-black hover:bg-yellow-400 flex justify-center items-center"><p>home</p></div>
        <div className="h-full w-20 active:bg-black hover:bg-yellow-400 flex justify-center items-center"><p>home</p></div>
        <div className="h-full w-auto p-3 active:bg-black hover:bg-yellow-400 flex justify-center items-center"><p>Sign in/Log in</p></div>
        
      </nav> */}

      {/* <Login/> */}
      {/* <Quiz/> */}
      <QuizSettings />
    </div>
  );
}

export default App;
 
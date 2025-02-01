import React from "react";
import { Link } from "react-router-dom";

const imgURL =
  "https://cdn.pixabay.com/photo/2021/02/04/17/06/scrabble-tiles-5981980_1280.jpg";

function Hero() {
  return (
    <div
      className="h-screen w-full flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Test Your Knowledge!</h1>
        <p className="mt-4 text-lg md:text-xl">
          Challenge yourself with quizzes on various topics.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link to="/signup" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg rounded-lg">
            Sign Up
          </Link>
          <Link to="/login" className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold text-lg rounded-lg">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

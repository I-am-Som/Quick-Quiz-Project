import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
    let [user, setUser] = useState("User");

    return (
        <nav className="w-full h-16 fixed top-0 left-0 flex justify-between items-center px-8 bg-yellow-500 z-10">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex justify-center items-center">
                    {/* Placeholder for logo */}
                    <img src="/public/brain.webp" alt="MindSpark Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-2xl font-semibold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    MindSpark
                </span>
            </div>

            {/* Navigation Links */}
            <div className="ml-16 flex h-full items-center space-x-6">
                <Link
                    to="/home"
                    className="h-full flex justify-center items-center p-3 text-slate-800 hover:bg-yellow-400 hover:text-slate-700 active:bg-slate-950 transition-all"
                >
                    <p className="font-semibold">Home</p>
                </Link>
                <Link
                    to="/searchquiz"
                    className="h-full flex justify-center items-center p-3 text-slate-800 hover:bg-yellow-400 hover:text-slate-700 active:bg-slate-950 transition-all"
                >
                    <p className="font-semibold">Search Quiz</p>
                </Link>
                <Link
                    to="/savedquizzes"
                    className="h-full flex justify-center items-center p-3 text-slate-800 hover:bg-yellow-400 hover:text-slate-700 active:bg-slate-950 transition-all"
                >
                    <p className="font-semibold">Saved Quizzes</p>
                </Link>
            </div>

            {/* User Profile Section */}
            <Link
                to="/login"
                className="h-full flex justify-center items-center p-3 text-slate-800 hover:bg-yellow-400 hover:text-slate-700 active:bg-slate-950 transition-all ml-auto"
            >
                <p className="font-semibold">{user}</p>
            </Link>
        </nav>
    );
}

export default Nav;

import { useState } from "react";
import { Link } from "react-router-dom";

function QuizSearch() {
    return (
        <div to="/searchquiz" className="h-full w-full flex justify-center items-center space-x-3 space-y-3">
            {/* <input type="search" className="" /> */}
            <QuizDetails quizname="vncjsdav" category="science" numQ="20"/>
            <QuizDetails quizname="vncjsdav" category="science" numQ="20"/>
            <QuizDetails quizname="vncjsdav" category="science" numQ="20"/>
            {/* <QuizDetails quizname="vncjsdav" />
            <QuizDetails quizname="vncjsdav" />
            <QuizDetails quizname="vncjsdav" /> */}
        </div>
    );
}

function QuizDetails({quizname, category, numQ}) {
    return (
        <div className="h-[180px] w-[320px] rounded-lg bg-slate-50/50 backdrop-blur-sm flex flex-col justify-center items-center font-semibold font-sans text-md">
            <p>{quizname}</p>
            <p>{category}</p>
            <p>{numQ}</p>
            <Link to="/quiz" className="h-10 w-20 bg-yellow-500 rounded-md flex justify-center items-center hover:bg-black hover:text-white">Take Quiz</Link>
        </div>
    );
}


export default QuizSearch;

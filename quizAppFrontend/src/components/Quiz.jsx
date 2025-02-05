import React, { useState } from "react";

let imgURL = "https://cdn.pixabay.com/photo/2022/03/15/08/23/pencil-7069760_1280.jpg";

function QuizPage() {
    let [question, setQuestion] = useState("Your question will be displayed soon");
    let [option1, setOption1] = useState("Option 1");
    let [option2, setOption2] = useState("Option 2");
    let [option3, setOption3] = useState("Option 3");
    let [option4, setOption4] = useState("Option 4");

    return (
        <div
            style={{ backgroundImage: `url(${imgURL})` }}
            className="h-[100vh] w-[100vw] flex justify-center items-center bg-cover bg-center"
        >
            <div className="h-[85%] w-[70%] bg-[#ffdb64] rounded-lg flex justify-center items-center">
                <div className="h-[97.4%] w-[98.4%] bg-[#FFF9C4] rounded-lg flex flex-col justify-center items-center space-y-3 p-5">

                    <div className="w-full h-[45%] bg-[#FFF59D] flex flex-col items-center space-y-1 self-start p-1 rounded-md 
                        shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7]">
                        <QInfo />
                        <Question question={question} />
                    </div>

                    <div className="w-full h-[100%] flex flex-col justify-center items-center space-y-3">
                        <OptionButton option={option1} />
                        <OptionButton option={option2} />
                        <OptionButton option={option3} />
                        <OptionButton option={option4} />
                    </div>

                    <QuizButtons />

                </div>
            </div>
        </div>
    );
}

function QInfo() {
    return (
        <div className="w-full h-auto flex items-center justify-between self-start p-1 text-center">
            <h3 className="w-[80px] h-[40px] font-semibold text-[#D4A60B] self-start ml-2">Question</h3>
            <div className="h-[40px] w-[80px] rounded-md flex justify-center items-center self-end mr-1 mt-1 bg-[#FF6B6B] 
                            shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7]">
                <p className="text-white">00:00</p>
            </div>
        </div>
    );
}

function Question({ question }) {
    return (
        <div className="w-full h-[60%] self-start ml-4 p-1 flex">
            <p className="font-sans text-md text-[#795548] font-semibold">{question}</p>
        </div>
    );
}


function OptionButton({ option }) {
    return (
        <button className="h-[15%] w-[90%] bg-[#FFECB3] rounded-md 
                        shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7] 
                        active:shadow-[inset_2px_2px_5px_#FDD835,inset_-2px_-2px_5px_#FFFDE7] 
                        transition-all text-[#795548]">
            {option}
        </button>
    )
}


function QuizButtons() {
    return (
        <div className="w-full flex justify-between">
            <button className="h-[40px] w-[80px] p-3 bg-[#D4A60B] text-white rounded-md 
                            flex justify-center items-center hover:bg-[#C08A00] ml-5">
                Prev
            </button>
            <button className="h-[40px] w-[80px] p-3 bg-[#D4A60B] text-white rounded-md 
                            flex justify-center items-center hover:bg-[#C08A00] mr-5">
                Next
            </button>
        </div>
    )
}


export default QuizPage;

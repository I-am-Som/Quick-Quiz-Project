import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext";  // Import QuizContext

let imgURL = "https://cdn.pixabay.com/photo/2022/03/15/08/23/pencil-7069760_1280.jpg";

function QuizPage() {
    const { quizID } = useQuiz();  // Get the quiz ID from context
    const [length, setLength] = useState(0);
    const [count, setCount] = useState(0);
    const [question, setQuestion] = useState("Your question will be displayed soon");
    const [option1, setOption1] = useState("Option 1");
    const [option2, setOption2] = useState("Option 2");
    const [option3, setOption3] = useState("Option 3");
    const [option4, setOption4] = useState("Option 4");

    useEffect(() => {
        if (!quizID) return; // Prevent fetching if no quiz is selected

        let API_URL = `http://localhost:8080/quiz/${quizID}`; // Fetch questions for the selected quiz

        fetch(API_URL)
            .then(response => response.json())
            .then((data) => {
                setLength(data.length);
                setQuestion(data[count].questionTitle);
                setOption1(data[count].option1);
                setOption2(data[count].option2);
                setOption3(data[count].option3);
                setOption4(data[count].option4);
            })
            .catch((error) => console.error("Error fetching questions:", error));
    }, [quizID, count]);  // Fetch questions when quizID or count changes

    if (!quizID) {
        return (
            <div className="h-screen w-screen flex justify-center items-center text-white text-2xl">
                No quiz selected. Please go back and select a quiz.
            </div>
        );
    }

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

                    <QuizButtons count={count} setCount={setCount} length={length} />

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

function QuizButtons({ count, setCount, length }) {
    return (
        <div className="w-full flex justify-between">
            <button className="h-[40px] w-[80px] p-3 bg-[#D4A60B] text-white rounded-md 
                            flex justify-center items-center hover:bg-[#C08A00] ml-5"
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1)
                    }
                }}>
                Prev
            </button>
            <button className="h-[40px] w-[80px] p-3 bg-[#D4A60B] text-white rounded-md 
                            flex justify-center items-center hover:bg-[#C08A00] mr-5"
                onClick={() => {
                    if (count < length - 1) {
                        setCount(count + 1)
                    }
                }}>
                Next
            </button>
        </div>
    )
}

export default QuizPage;

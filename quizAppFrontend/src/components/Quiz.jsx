import React, { useEffect, useState } from "react";
import { useQuiz } from "../context/QuizContext"; // Import QuizContext

let imgURL = "https://cdn.pixabay.com/photo/2022/03/15/08/23/pencil-7069760_1280.jpg";

function QuizPage() {
    const { quizID } = useQuiz();
    const [questions, setQuestions] = useState([]);
    const [count, setCount] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    useEffect(() => {
        if (!quizID) return;

        let API_URL = `http://localhost:8080/quiz/${quizID}`;

        fetch(API_URL)
            .then(response => response.json())
            .then((data) => {
                setQuestions(data);
                setSelectedAnswers(new Array(data.length).fill(null)); // Initialize answers array
            })
            .catch((error) => console.error("Error fetching questions:", error));
    }, [quizID]);

    if (!quizID) {
        return (
            <div className="h-screen w-screen flex justify-center items-center text-white text-2xl">
                No quiz selected. Please go back and select a quiz.
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="h-screen w-screen flex justify-center items-center text-white text-2xl">
                Loading questions...
            </div>
        );
    }

    const currentQuestion = questions[count];

    const handleOptionSelect = (answerText) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[count] = { questionId: currentQuestion.id, selectedAnswer: answerText }; // Store questionId & answer
        setSelectedAnswers(newAnswers);

        // Move to next question automatically
        if (count < questions.length - 1) {
            setCount(count + 1);
        } else {
            submitQuiz(newAnswers); // Submit on last question
        }
    };

    const submitQuiz = (answers) => {
        const API_URL = `http://localhost:8080/quiz/submit/${quizID}`;

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answers),
        })
            .then(response => response.json())
            .then((score) => {
                console.log("Quiz Submitted. Score:", score);
                alert(`Quiz completed! Your score: ${score}`);
            })
            .catch((error) => console.error("Error submitting quiz:", error));
    };

    return (
        <div
            style={{ backgroundImage: `url(${imgURL})` }}
            className="h-[100vh] w-[100vw] flex justify-center items-center bg-cover bg-center"
        >
            <div className="h-[85%] w-[70%] bg-[#ffdb64] rounded-lg flex justify-center items-center">
                <div className="h-[97.4%] w-[98.4%] bg-[#FFF9C4] rounded-lg flex flex-col justify-center items-center space-y-3 p-5">

                    <div className="w-full h-[45%] bg-[#FFF59D] flex flex-col items-center space-y-1 self-start p-1 rounded-md 
                        shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7]">
                        <QInfo count={count} total={questions.length} />
                        <Question question={currentQuestion.questionTitle} />
                    </div>

                    <div className="w-full h-[100%] flex flex-col justify-center items-center space-y-3">
                        {[currentQuestion.option1, currentQuestion.option2, currentQuestion.option3, currentQuestion.option4].map((option, index) => (
                            <OptionButton
                                key={index}
                                option={option}
                                isSelected={selectedAnswers[count]?.selectedAnswer === option}
                                onSelect={() => handleOptionSelect(option)}
                            />
                        ))}
                    </div>

                    <QuizButtons
                        count={count}
                        setCount={setCount}
                        length={questions.length}
                        isLastQuestion={count === questions.length - 1}
                        submitQuiz={submitQuiz}
                        selectedAnswers={selectedAnswers}
                    />
                </div>
            </div>
        </div>
    );
}

function QInfo({ count, total }) {
    return (
        <div className="w-full h-auto flex items-center justify-between self-start p-1 text-center">
            <h3 className="w-auto h-[40px] font-semibold text-[#D4A60B] self-start ml-2">
                Question {count + 1} / {total}
            </h3>
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

function OptionButton({ option, isSelected, onSelect }) {
    return (
        <button
            className={`h-[15%] w-[90%] rounded-md text-[#795548] 
                        shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7] 
                        active:shadow-[inset_2px_2px_5px_#FDD835,inset_-2px_-2px_5px_#FFFDE7] 
                        transition-all ${isSelected ? "bg-[#FBC02D]" : "bg-[#FFECB3]"}`}
            onClick={onSelect}
        >
            {option}
        </button>
    );
}

function QuizButtons({ count, setCount, length, isLastQuestion, submitQuiz, selectedAnswers }) {
    return (
        <div className="w-full flex justify-between">
            <button className="h-[40px] w-[80px] p-3 bg-[#D4A60B] text-white rounded-md 
                            flex justify-center items-center hover:bg-[#C08A00] ml-5"
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1);
                    }
                }}>
                Prev
            </button>
            <button className="h-[40px] w-[80px] p-3 bg-[#D4A60B] text-white rounded-md 
                            flex justify-center items-center hover:bg-[#C08A00] mr-5"
                onClick={() => {
                    if (isLastQuestion) {
                        submitQuiz(selectedAnswers);
                    } else {
                        setCount(count + 1);
                    }
                }}>
                {isLastQuestion ? "Submit" : "Next"}
            </button>
        </div>
    );
}

export default QuizPage;

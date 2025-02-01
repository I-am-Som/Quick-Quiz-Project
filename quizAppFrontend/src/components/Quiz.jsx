import React, { useState } from "react";

function QuizPage() {
    let [question, setQuestion] = useState("Your question will be displayed soon");
    let [option1, setOption1] = useState("option 1");
    let [option2, setOption2] = useState("option 2");
    let [option3, setOption3] = useState("option 3");
    let [option4, setOption4] = useState("option 4");

    return (
        <div className="h-[100%] w-[100%] bg-[#E0F2F1] flex justify-center items-center">
            <div className="h-[80%] w-[65%] bg-gray-100 rounded-lg border-slate-300 border-[1px] flex flex-col justify-center items-center space-y-3">
                <div className="w-full h-auto bg-slate-200 flex items-center justify-between self-start mt-0">
                <h3 className="font-semibold text-[#008080] self-start ml-5">Question</h3>
                <div className="h-[40px] w-[80px] rounded-md flex justify-center items-center bg-red-600 self-end mr-5">
                    <p className="text-white">00:00</p>
                </div>
                </div>
                
                
                <div className="w-full h-[10%] self-start mt-3 flex flex-col items-center justify-center">
                    <p className="font-sans text-md text-[#333333]">{question}</p>
                </div>

                
                <button
                    className="h-[9%] w-[80%] bg-[#D3D3D3] border-slate-300 border-[1px] hover:bg-[#B0B0B0] rounded-md active:bg-green-100"
                    onClick={() => {setOption1(option1)}}
                >
                    {option1}
                </button>

                
                <button
                    className="h-[9%] w-[80%] bg-[#D3D3D3] border-slate-300 border-[1px] hover:bg-[#B0B0B0] rounded-md active:bg-green-100"
                    onClick={() => {setOption2(option2)}}
                >
                    {option2}
                </button>
                
                
                <button
                    className="h-[9%] w-[80%] bg-[#D3D3D3] border-slate-300 border-[1px] hover:bg-[#B0B0B0] rounded-md active:bg-green-100"
                    onClick={() => {setOption3(option3)}}
                >
                    {option3}
                </button>
                
                
                <button
                    className="h-[9%] w-[80%] bg-[#D3D3D3] border-slate-300 border-[1px] hover:bg-[#B0B0B0] rounded-md active:bg-green-100"
                    onClick={() => {setOption4(option4)}}
                >
                    {option4}
                </button>

            <div className="w-full flex justify-between">
                <button className="h-[40px] w-[80px] p-3 relative bg-[#008080] text-[#D3D3D3] rounded-md flex justify-center items-center hover:bg-[#004D40] self-start ml-5">
                    prev
                </button>
                <button className="h-[40px] w-[80px] p-3 relative  bg-[#008080] text-[#D3D3D3] rounded-md flex justify-center items-center hover:bg-[#004D40] self-end mr-5">
                    next
                </button>
            </div>
            </div>
        </div>
    );
}

export default QuizPage;

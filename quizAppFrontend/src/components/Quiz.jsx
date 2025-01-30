import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function QuizPage() {
    let [question, setQuestion] = useState("Your question will be displayed soon");
    let [option1,setOption1] = useState("option 1");
    let [option2,setOption2] = useState("option 2");
    let [option3,setOption3] = useState("option 3");
    let [option4,setOption4] = useState("option 4");


    return (
        <div className="h-[100%] w-[100%] bg-white flex justify-center items-center">
            <div className="h-[80%] w-[65%] rounded-lg bg-gray-100 border-slate-300 border-[1px] flex flex-col justify-center items-center space-y-3">
                <h6 className="font-semibold">Question{}</h6>
                
                    {/* your question */}
                    <div className="w-full h-[10%] self-start mt-3 flex flex-col items-center jsutify-center">
                        <p className="font-sans text-md">{question}</p>
                    </div>

                    {/* option 1 */}
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md"
                    onClick={() => {setOption1(option1)}}
                    >
                        {option1}
                    </button>

                    {/* option 2 */}
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md"
                    onClick={() => {setOption2(option2)}}
                    >
                        {option2}
                    </button>
                    
                    {/* option 3 */}
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md"
                    onClick={() => {setOption3(option3)}}
                    >
                        {option3}
                    </button>
                    
                    {/* option 4 */}
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md"
                    onClick={() => {setOption4(option4)}}
                    >
                        {option4}
                    </button>
            </div>
        </div>
    );
}
export default QuizPage;
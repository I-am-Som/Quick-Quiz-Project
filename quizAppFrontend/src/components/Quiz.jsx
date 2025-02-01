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
            className="h-[100%] w-[100%] flex justify-center items-center"
        >
            {/* Outer Container with Neomorphic Effect */}
            <div className="h-[85%] w-[70%] bg-[#FFF9C4] rounded-lg  
                shadow-[inset_5px_5px_10px_#FDD835,inset_-5px_-5px_10px_#FFFDE7, 
                        10px 10px 25px rgba(0, 0, 0, 0.3), 25px 25px 35px rgba(0, 0, 0, 0.1)] 
                flex justify-center items-center">

                <div className="h-[100%] w-[100%] bg-[#FFF9C4] rounded-lg  
                    shadow-[inset_5px_5px_10px_#FDD835,inset_-5px_-5px_10px_#FFFDE7] 
                    flex justify-center items-center opacity-90">
                    
                    {/* Main Quiz Container with Reversed Neomorphic Effect */}
                    <div className="h-[98%] w-[98%] bg-[#FFF9C4] rounded-lg  
                        shadow-[-5px_-5px_10px_#FDD835,5px_5px_10px_#FFFDE7] 
                        flex flex-col justify-center items-center space-y-3 p-5 mt-5">

                        
                        <div className="w-full h-auto bg-[#FFF59D] flex items-center justify-between self-start p-3 rounded-md">
                            <h3 className="font-semibold text-[#D4A60B] self-start ml-5">Question</h3>
                            <div className="h-[40px] w-[80px] rounded-md flex justify-center items-center bg-red-600 self-end mr-5">
                                <p className="text-white">00:00</p>
                            </div>
                        </div>
                        
                        <div className="w-full h-[10%] self-start mt-3 flex flex-col items-center justify-center">
                            <p className="font-sans text-md text-[#795548]">{question}</p>
                        </div>

                        {/* Neomorphic Effect on Buttons */}
                        <button className="h-[9%] w-[80%] bg-[#FFECB3] rounded-md 
                                            shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7] 
                                            active:shadow-[inset_2px_2px_5px_#FDD835,inset_-2px_-2px_5px_#FFFDE7] 
                                            transition-all">
                            {option1}
                        </button>

                        <button className="h-[9%] w-[80%] bg-[#FFECB3] rounded-md 
                                            shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7] 
                                            active:shadow-[inset_2px_2px_5px_#FDD835,inset_-2px_-2px_5px_#FFFDE7] 
                                            transition-all">
                            {option2}
                        </button>

                        <button className="h-[9%] w-[80%] bg-[#FFECB3] rounded-md 
                                            shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7] 
                                            active:shadow-[inset_2px_2px_5px_#FDD835,inset_-2px_-2px_5px_#FFFDE7] 
                                            transition-all">
                            {option3}
                        </button>

                        <button className="h-[9%] w-[80%] bg-[#FFECB3] rounded-md 
                                            shadow-[5px_5px_10px_#FDD835,-5px_-5px_10px_#FFFDE7] 
                                            active:shadow-[inset_2px_2px_5px_#FDD835,inset_-2px_-2px_5px_#FFFDE7] 
                                            transition-all">
                            {option4}
                        </button>

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

                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizPage;

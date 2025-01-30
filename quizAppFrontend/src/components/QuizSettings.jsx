import { useState } from "react";

function QuizSettings() {

    let [value, setValue] = useState(1);

    return (
    <div className="h-full w-full flex justify-center items-center">
        <div className="h-[30%] w-[30%] rounded-md bg-gray-100 border-2 border-gray-200 flex flex-col space-y-7 justify-center items-center">
            
            <div className="w-[100%] flex items-center justify-center">
                <input className="w-[62.5%] h-[45px] rounded-md" type="text" placeholder=" Enter quiz name" />
            </div>

            <div className="w-[100%] flex flex-row space-x-3 justify-center">
                <input className="w-[30%] h-[35px] rounded-md active:border-[none]" placeholder=" category" type="search" />
                <input className="w-[30%] h-[35px] rounded-md active:border-[none]" placeholder=" number" type="number " />
            </div>
            <div className="w-[100%] flex flex-row space-x-24 justify-center">
                <input type="range" max={2} defaultValue={1} onChange={(event)=>{setValue(event.target.value)}} className="w-[20%] rounded-sm border-[none]" />
                <button className="w-[20%] h-[45px] rounded-md border-2">
                    Take Test
                </button>
            </div>
        </div>
    </div>
    );
}
export default QuizSettings;
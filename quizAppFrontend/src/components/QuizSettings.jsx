import { useState } from "react";

function QuizSettings() {

    let [value, setValue] = useState(1);
    let [title, setTitle] = useState("");
    let [category, setCatergory] = useState("");
    let [numQ, setnumQ] = useState(10);

    return (
    <div className="h-full w-full flex justify-center items-center">
        <div className="h-[30%] w-[30%] rounded-md bg-gray-100 border-2 border-gray-200 flex flex-col space-y-7 justify-center items-center">
            
            <div className="w-[100%] flex items-center justify-center">
                <input className="w-[65%] h-[45px] rounded-md" type="text" placeholder=" Enter quiz name" onChange={(event)=>{setTitle(event.target.value)}}/>
            </div>

            <div className="w-[100%] flex flex-row space-x-3 justify-center items-center">
                <input className="w-[20%] h-[35px] rounded-md active:border-0 p-1" placeholder=" category" type="search" onChange={(event)=>{setCatergory(event.target.value)}}/>
                <input className="w-[20%] h-[35px] rounded-md active:border-0 p-1" min={5} placeholder=" number" type="number" onChange={(event)=>{setnumQ(event.target.value)}}/>
                <button className="w-[20%] h-[35px] rounded-md bg-yellow-500 hover:bg-yellow-400 active:bg-black active:text-white">
                    Take Test
                </button>
            </div>
        </div>
    </div>
    );
}
export default QuizSettings;
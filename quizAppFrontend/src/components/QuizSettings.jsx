import { useState } from "react";
import { Link } from "react-router-dom";

function QuizSettings() {
    let [value, setValue] = useState(1);
    let [title, setTitle] = useState("");
    let [category, setCategory] = useState("");
    let [numQ, setNumQ] = useState(10);

    return (
        <div className="h-full w-full flex justify-center items-center bg-[#E0F2F1]">
            <div className="h-[30%] w-[30%] rounded-md bg-white shadow-lg border-2 border-[#00695C] flex flex-col space-y-7 justify-center items-center p-6">
                <div className="w-[100%] flex items-center justify-center">
                    <input
                        className="w-[65%] h-[45px] rounded-md bg-[#D3D3D3] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#008080] p-3"
                        type="text"
                        placeholder="Enter quiz name"
                        onChange={(event) => { setTitle(event.target.value) }}
                    />
                </div>

                <div className="w-[100%] flex flex-row space-x-3 justify-center items-center">
                    <input
                        className="w-[20%] h-[35px] rounded-md bg-[#D3D3D3] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#008080] p-3"
                        type="search"
                        placeholder="Category"
                        onChange={(event) => { setCategory(event.target.value) }}
                    />
                    <input
                        className="w-[20%] h-[35px] rounded-md bg-[#D3D3D3] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#008080] p-3"
                        min={5}
                        placeholder="Number"
                        type="number"
                        onChange={(event) => { setNumQ(event.target.value) }}
                    />
                    <Link to="/quiz"
                        className="w-[20%] h-[35px] rounded-md bg-[#008080] flex justify-center items-center text-white hover:bg-[#004d40] focus:outline-none"
                    >
                        Take Test
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default QuizSettings;

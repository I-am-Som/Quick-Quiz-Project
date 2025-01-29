function QuizPage() {
    return (
        <div className="h-screen w-screen bg-white flex justify-center items-center">
            <div className="h-[80%] w-[65%] rounded-lg bg-gray-100 border-slate-300 border-[1px] flex flex-col justify-center items-center space-y-3">
                <h6 className="font-semibold">Question{}</h6>
                
                    <div className="w-full h-[10%] self-start mt-3 flex flex-col items-center jsutify-center">
                        <p className="font-sans text-md">who are you boy?</p>
                    </div>
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md">
                        option 1
                    </button>
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md">
                        option 2
                    </button>
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md">
                        option 3
                    </button>
                    <button className="h-[9%] w-[80%] bg-gray-200 border-slate-300 border-[1px] hover:bg-gray-300 rounded-md">
                        option 4
                    </button>
            </div>
        </div>
    );
}
export default QuizPage;
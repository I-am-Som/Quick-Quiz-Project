function QuizPage() {
    return (
        <div className="h-screen w-screen bg-white flex justify-center items-center">
            <div className="h-[80%] w-[65%] rounded-lg bg-rose-50 flex-row space-y-3">
                <button className="h-[9%] w-[80%] bg-amber-100 rounded-md">
                    option 1
                </button>
                <button className="h-[9%] w-[80%] bg-amber-100 rounded-md">
                    option 2
                </button>
                <button className="h-[9%] w-[80%] bg-amber-100 rounded-md">
                    option 3
                </button>
                <button className="h-[9%] w-[80%] bg-amber-100 rounded-md">
                    option 4
                </button>
            </div>
        </div>
    );
}
export default QuizPage;
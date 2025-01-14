function Login() {
    return (
        <div className="h-[60%] w-[30%] max-w-[400px] rounded-[10px] bg-white/10 backdrop-blur-sm flex flex-col justify-center items-center gap-6 p-6 shadow-lg">
            <form className="w-full flex flex-col items-center gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="w-[85%]">
                    <label htmlFor="username" className="sr-only">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        className="h-10 w-full rounded-[10px] px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="w-[85%]">
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="h-10 w-full rounded-[10px] px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="h-10 w-[85%] bg-blue-500 text-white rounded-[10px] hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;

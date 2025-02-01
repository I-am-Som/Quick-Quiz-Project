function Login() {
    const imgURL = "https://cdn.pixabay.com/photo/2019/06/14/09/57/scrabble-4273254_1280.jpg"; // Replace with a direct image URL
    return (
        <div
        style={{
            backgroundImage: `url(${imgURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} 
        className={
            `h-screen
             w-screen 
             flex justify-center items-center`}>
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
                            className="h-10 w-full rounded-[10px] px-4 border border-[#d9b99b] bg-[#e6ded6]"
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
                            className="h-10 w-full rounded-[10px] px-4 border border-[#d9b99b] bg-[#e6ded6]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-10 w-[85%] bg-[#d9b99b] text-[#4b3b42] rounded-[10px] hover:bg-[#eed9c4] active:text-[#eed9c4] active:bg-[#9c8481]"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;

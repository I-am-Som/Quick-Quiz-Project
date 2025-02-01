import { Link } from "react-router-dom";

function Signup() {
    const imgURL = "https://cdn.pixabay.com/photo/2019/06/14/09/57/scrabble-4273255_640.jpg";

    return (
        <div
            className="h-screen w-screen flex justify-center items-center relative"
            style={{
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 h-[70%] w-[30%] max-w-[450px] rounded-xl bg-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-center items-center gap-6 p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-white">Create an Account</h2>

                <form className="w-full flex flex-col items-center gap-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="w-[85%]">
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md placeholder-gray-300"
                        />
                    </div>
                    <div className="w-[85%]">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md placeholder-gray-300"
                        />
                    </div>
                    <div className="w-[85%]">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md placeholder-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="h-12 w-[85%] bg-yellow-400 text-black font-semibold rounded-lg hover:bg-black hover:text-white active:bg-gray-400 shadow-md transition-all"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-white text-sm opacity-80">
                    <p>Already have an account? <Link to="/login" className="text-yellow-400 hover:underline underline-offset-4">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
    const imgURL = "https://cdn.pixabay.com/photo/2019/06/14/09/57/scrabble-4273254_1280.jpg"; 
    const navigate = useNavigate(); // Initialize useNavigate

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        
        if (response.ok) {
            
            
            // Store user data in localStorage or state if needed
            localStorage.setItem("user", JSON.stringify(data));

            // Redirect to home page
            navigate("/"); 
        } else {
            alert(data.message || "Invalid email or password!");
        }
    };

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

            <div className="relative z-10 h-[65%] w-[30%] max-w-[450px] rounded-xl bg-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-center items-center gap-6 p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-white">Welcome Back</h2>

                <form className="w-full flex flex-col items-center gap-5" onSubmit={handleLogin}>
                    <div className="w-[85%]">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your registered e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md placeholder-gray-300"
                        />
                    </div>
                    <div className="w-[85%]">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md placeholder-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="h-12 w-[85%] bg-yellow-400 text-black font-semibold rounded-lg hover:bg-black hover:text-white active:bg-gray-400 shadow-md transition-all"
                    >
                        Login
                    </button>
                </form>

                <div className="text-white text-sm opacity-80">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                </div>
            </div>
        </div>  
    );
}

export default Login;

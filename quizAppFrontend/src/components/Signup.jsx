import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const imgURL = "https://cdn.pixabay.com/photo/2019/06/14/09/57/scrabble-4273255_640.jpg";
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: "",
        userGmail: "",
        password: "",
        country: "",
    });

    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setError(null);

        try {
            const response = await fetch("http://localhost:8080/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("User registered successfully!");
                setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
            } else {
                setError(data.message || "Signup failed.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
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

            <div className="relative z-10 h-auto w-[30%] max-w-[450px] rounded-xl bg-white/10 backdrop-blur-xl flex flex-col justify-center items-center gap-6 p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-white">Create an Account</h2>

                {message && <p className="text-green-400">{message}</p>}
                {error && <p className="text-red-400">{error}</p>}

                <form className="w-full flex flex-col items-center gap-5" onSubmit={handleSubmit}>
                    <div className="w-[85%]">
                        <label htmlFor="userName" className="sr-only">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300"
                            required
                        />
                    </div>
                    <div className="w-[85%]">
                        <label htmlFor="userGmail" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="userGmail"
                            name="userGmail"
                            value={formData.userGmail}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300"
                            required
                        />
                    </div>
                    <div className="w-[85%]">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="h-12 w-full rounded-lg px-4 border border-gray-300 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300"
                            required
                        />
                    </div>

                    {/* Country Selection Dropdown */}
                    <div className="w-[85%]">
    <label htmlFor="country" className="sr-only">Country</label>
    <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="h-12 w-full rounded-lg px-4 border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-300 backdrop-blur-md appearance-none"
        required
    >
        <option value="" className="bg-white/20 text-gray-300">Select your country</option>
        <option value="USA" className="bg-white/20 text-black">United States</option>
        <option value="India" className="bg-white/20 text-black">India</option>
        <option value="UK" className="bg-white/20 text-black">United Kingdom</option>
        <option value="Germany" className="bg-white/20 text-black">Germany</option>
        <option value="France" className="bg-white/20 text-black">France</option>
        <option value="Canada" className="bg-white/20 text-black">Canada</option>
        <option value="Australia" className="bg-white/20 text-black">Australia</option>
    </select>
</div>


                    <button
                        type="submit"
                        className="h-12 w-[85%] bg-yellow-400 text-black font-semibold rounded-lg hover:bg-black hover:text-white active:bg-gray-400 transition-all"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-white text-sm opacity-80">
                    <p>Already have an account? <Link to="/login" className="text-yellow-400 hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;

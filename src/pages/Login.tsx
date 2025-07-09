import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import userDetails from "../data/userDetails.json";
const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        console.log(userDetails)
    }, [])

    const navigate = useNavigate();

    const handleLogin = async (event: any) => {
        event.preventDefault();

        try {
            if (email === userDetails?.userEmail) {
                localStorage.setItem("email", email);
                navigate('/dashboard');
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setEmail("");
            setPassword("");
        }
    };

    return (
        <>
            <Navbar />
            <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-50  px-4 z-40">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-[#2d5f4f]">ALTIBBE</h1>
                        <p className="text-gray-500 mt-1">Health Wisdom Virtue.</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a8b71] transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4a8b71] transition"
                                required
                            />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-sm text-[#4a8b71] hover:underline">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#4a8b71] hover:bg-[#3b735e] text-white font-semibold rounded-xl transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                </div>
            </div>

        </>
    );
};

export default Login;

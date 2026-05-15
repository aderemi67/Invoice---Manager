import {
    useContext,
    useState,
} from "react";

import {
    AuthContext,
} from "../context/AuthContext";
import { toast } from "react-toastify";

import { Navigate, useNavigate } from "react-router-dom";

function Login() {
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        password:"",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: 
            e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(
            formData.email,
            formData.password
        );

        if (success) {
            toast.success("Login Successful!");
            navigate("/dashboard");
        } else {
            toast.error("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form 
            onSubmit = {handleSubmit}
            className="bg-white p-6 rounded shadow w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">
                    Login
                </h1>

                <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border p-2 mb-4"
                onChange= {handleChange}
                />

                <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border p-2 mb-4"
                onChange={handleChange}
                />

                <button
                className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                    Login
                </button>
                </form>
        </div>
    );
}

export default Login;
import {
    useContext,
    useState,
} from "react";

import {
    AuthContext
} from "../context/AuthContext";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

function Signup() {
    const { signup } = useContext(AuthContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        signup(     
            formData.name,
            formData.email,
            formData.password
        );
        toast.success(
            "Account Created Successfully!"
        );
        navigate("/dashboard");
    };

    return(
        <div className="min-h-screen flex items-center justify-center">
            <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">
                    Signup
                </h1>

                <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border p-2 mb-4"
                onChange={handleChange}
                />

                <input
                type="password"
                name="password"
                placeholder="password"
                className="w-full border p-2 mb-4"
                onChange={handleChange}
                />

                <button 
                className="bg-green-600 text-white
                 px-4 py-2 rounded w-full"
                >
                    Signup
                </button>
            </form>
        </div>
    );
}

export default Signup;
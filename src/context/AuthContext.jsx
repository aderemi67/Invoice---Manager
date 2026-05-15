import {
    createContext,
    useEffect,
    useState,
} from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const signup = (name, email, password) => {
        const newUser = {
            name,
            email,
            password,
        };

        localStorage.setItem("user", JSON.stringify(newUser));

        setUser(newUser);
    };

    const login = (email, password) => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser && savedUser.email === email && savedUser.password === password) {
            setUser(savedUser);

            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider
        value={{
            user,
            signup,
            login,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
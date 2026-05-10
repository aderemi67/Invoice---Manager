import { useContext } from "react";

import {
    ThemeContext,
} from "../context/ThemeContext";

function ThemeToggle() {
    const {
        darkMode,
        setDarkMode,
    } = useContext(ThemeContext);

    return (
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded">
            {darkMode
            ? "Light Mode" : "Dark Mode"}
        </button>
    );
}

export default ThemeToggle;
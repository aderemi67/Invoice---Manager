import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
        <header 
        className="bg-white dark:bg-gray-900
        shadow px-6 py-4">
            <div
            className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                to="/"
                className="text-2xl font-bold text-blue-600">
                    InVoicePro
                </Link>

                {/* Nav Links */}
                <nav className="flex items-center gap-6">
                    <Link to="/"
                    className="hover:text-blue-600">
                        Home
                    </Link>

                    <Link
                    to="/dashboard"
                    className="hover:text-blue-600">
                        Dashboard
                    </Link>

                    <Link
                    to="/create"
                    className="hover:text-blue-600"
                    >
                        Create Invoice
                    </Link>

                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
} 

export default Navbar; 
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const navLinks = [
        {
            name: "Dashboard",
            path: "/",
        },
        {
            name: "Create Invoice",
            path: "/create",
        }, 
    ];

    return (
        <div 
        className="w-64 min-h-screen bg-gray-900
        text-white p-6 hidden md:block">
            <h1 className="text-3xl font-bold mb-10">
                InvoicePro
            </h1>

            <nav className="space-y-4">
                {navLinks.map((link) => (
                    <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded transition
                        ${
                            location.pathname === link.path ?
                            "bg-blue-600" : "hover:bg-gray-800"
                        }`}>
                            {link}
                        </Link>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
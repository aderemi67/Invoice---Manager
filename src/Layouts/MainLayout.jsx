import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
    return (
        <div
        className="min-h-screen flex flex-col bg-gray-100
        dark:bg-gray-900 text-black dark:text-white">
            <Navbar />

            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
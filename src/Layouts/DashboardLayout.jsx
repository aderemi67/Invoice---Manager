import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DashboardLayout ({
    children,
}) {
    return (
        <div
        className="min-h-screen bg-gray-100 dark:bg-gray-900
        text-black dark:text-white flex flex-col">
            <Navbar />

            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default DashboardLayout;
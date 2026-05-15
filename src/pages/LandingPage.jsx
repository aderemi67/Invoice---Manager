import { Link }  from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

function LandingPage() {
    return (
        <MainLayout>
        <div 
        className="min-h-screen bg-gradient-to-br from-blue-600
        to-indigo-800 text-white flex flex-col">
            {/* Navbar */}
            <header
            className="flex justify-between items-center p-6 max-w-7xl 
            mx-auto w-full">
                <h1 className="text-3xl font-bold ">
                    InvoicePro
                </h1>
                <div className="flex gap-4">

                <Link 
                to="/login"
                className="border border-white px-4 py-2 rounded">
                    Login
                </Link>

                <Link
                to="/signup"
                className="bg-white text-blue-700
                px-4 py-2 rounded font-semibold">
                    Get Started
                </Link>
                </div>
            </header>
            

            {/* Hero section */}
            <main
            className="flex-1 flex flex-col justify-center
            items-center text-center p-6">
                <h1
                className="text-5xl md:text-7xl font-bold mb-6">
                    Smart Invoice
                    <br />
                    Management System
                </h1>

                <p 
                className="text-lg md:text-2xl max-w-3xl
                mb-8 text-blue-100">
                    Create, manage, track, and export invoices with beautiful
                    dashboards and analytics.
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                    <Link
                    to="/signup"
                    className="bg-white text-blue-700 px-8
                    py-4 rounded text-lg font-semibold">
                        Start Free
                    </Link>

                    <Link
                    to="/login"
                    className="border border-white px-8 py-4 rounded text-lg">
                        Login
                    </Link>
                </div>
            </main>

            {/* features */}
            <section
            className="bg-white text-black p-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2
                    className="text-4xl font-bold text-center mb-16">
                        PowerFul Features
                    </h2>

                    <div
                    className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded shadow">
                            <h3 className="text-2xl font-bold mb-4">
                                Invoice Creation
                            </h3>

                            <p>Generate professional
                                invoice instantly.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded shadow">
                            <h3 className="text-2xl font-bold mb-4">
                                Revenue Anaytics
                            </h3>

                            <p>Track revenue with charts and reports.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded shadow">
                            <h3 className="text-2xl font-bold mb-4">
                                PDF Export
                            </h3>
                            <p>Download and share invoices as PDFs.</p>
                        </div>
                    </div>

                </div>
            </section>
            </div>
            </MainLayout>
        
    );
}

export default LandingPage;
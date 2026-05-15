function Footer() {
    return (
        <footer
        className="bg-gray-900 text-white py-6 mt-10">
            <div 
            className="max-w-7xl mx-auto p-6 text-center">
                <h2 className="text-xl font-bold mb-2">
                    InvoicePro
                </h2>

                <p className="text-gray-400">
                    Smart Invoice Management System
                </p>

                <p className="mt-4 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} InvoicePro.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
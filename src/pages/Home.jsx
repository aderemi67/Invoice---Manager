import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";

function Home() {
    const { invoices } = useContext(InvoiceContext);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6"> All Invoices</h1>

            {invoices.length === 0 ? (
                <p>No Invoices yet</p>
            ): (
                invoices.map((invoice) => (
                    <div
                    key={invoice.id}
                    className="border p-4 rounded mb-4">
                        <h2 className="font-bold">
                            Invoice ID: {invoice.id}
                            </h2> 
                            <p>Total: ${invoice.total}</p>
                            <p>Status: {invoice.status}</p>
                            </div>
                ))
            )}
        </div>
    );
}

export default Home;
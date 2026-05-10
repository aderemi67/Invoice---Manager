import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";

function DashboardStats() {
    const { invoices } = useContext(InvoiceContext);

    const totalInvoices = invoices.length;

    const paidInvoices = invoices.filter(
        (invoice) => invoice.status === "paid"
    ).length;

    
    const pendingInvoices = invoices.filter(
        (invoice) => invoice.status === "pending"
    ).length;

    const totalRevenue = invoices.filter((invoice) => invoice.status === "paid").reduce(
        (acc, invoice) => acc + invoice.total, 0
    );

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white shadow rounded p-4">
                <h2 className="text-gray-500">
                    Total Invoices
                </h2>

                <p className="text-2xl font-bold">{totalInvoices}</p>
            </div>

            <div className="bg-white shadow rounded p-4">
                <h2 className="text-gray-500">
                    Paid
                </h2>

                <p className="text-2xl font-bold text-green-500">
                    {paidInvoices}
                </p>
            </div>

            <div className="bg-white shadow rounded p-4">
                <h2 className="text-gray-500">Pending</h2>
            
            <p className="text-2xl font-bold text-red-500">
                {pendingInvoices}
            </p>
        </div>

        <div className="bg-white shadow rounded p-4">
            <h2 className="text-gray-500">
                Revenue
            </h2>

            <p className="text-2xl font-bold">
                ${totalRevenue}
            </p>
        </div>
        </div>
    );
}

export default DashboardStats;
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InvoiceContext } from "../context/InvoiceContext";
import DashboardStats from "../components/DashboardStats";

function Home() {
    const { invoices,
        deleteInvoice,
        markAsPaid,
     } = useContext(InvoiceContext);

     const [search, setSearch] = useState("");
     const [filterStatus, setFilterStatus] = useState("all");


     const filteredInvoices = invoices.filter(
        (invoice) => {
            const matchesSearch = invoice.id
            .toString()
            .includes(search);

            const matchesStatus = filterStatus === "all"
            ? true : invoice.status === filterStatus;

            return matchesSearch && matchesStatus;
        }
     );

    return (
        <div className="p-6 max-w-4xl mx-auto">
             <div className="flex justify-between items-center mb-6"> 
            <h1 className="text-3xl font-bold mb-6"> All Invoices</h1>

        <Link
        to="/create"
        className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Invoice
        </Link>
        </div>

        <DashboardStats />

        <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
            type="text"
            placeholder="Search by invoice ID..."
            value={search}
            onChange={(e) => 
                setSearch(e.target.value)
            }
            className="border p-2 rounded w-full"
            />

            <select
            value={filterStatus}
            onChange={(e) => 
                setFilterStatus(e.target.value)
            }
            className="border p-2 rounded"
            >
                <option value="all">All</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
            </select>
        </div>

            {invoices.length === 0 ? (
                <p>No Invoices yet</p>
            ): (
                filteredInvoices.map((invoice) => (
                    <div
                    key={invoice.id}
                    className="border p-4 rounded mb-4">
                        <h2 className="font-bold">
                            Invoice #{invoice.id}
                            </h2> 
                            <p>Total: ${invoice.total}</p>
                            <p
                            className={`font-semibold ${invoice.status === "paid" ? "text-green-500" : "text-red-500"}`}
                            >
                            {invoice.status}
                            </p>

                            <div className="flex gap-3 mt-4">
                                <button
                                onClick={() => markAsPaid(invoice.id)}
                                className="bg-green-500 text-white px-3 py-1 rounded">
                                    Mark Paid
                                </button>

                                <button
                                onClick={() => deleteInvoice(invoice.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>

                                <Link
                                to={`/edit/${invoice.id}`}
                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                                >
                                Edit
                                </Link>
                            </div>
                            </div>
                ))
            )}
        
    </div>
    );
}

export default Home;
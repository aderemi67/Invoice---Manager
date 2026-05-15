import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InvoiceContext } from "../context/InvoiceContext";
import DashboardStats from "../components/DashboardStats";
import RevenueChart from "../components/RevenueCharts";
import ThemeToggle from "../components/ThemeToggle";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import DashboardLayout from "../Layouts/DashboardLayout";

function Home() {
    const { invoices,
        deleteInvoice,
        markAsPaid,
     } = useContext(InvoiceContext);

     const navigate = useNavigate(); 
     const [search, setSearch] = useState("");
     const [filterStatus, setFilterStatus] = useState("all");

     const { logout } = useContext(AuthContext);

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

     const isOverdue = (dueDate) => {
        if (!dueDate) return false;

        return (
            new Date(dueDate) < new Date()
        );
     };

    return (
        <DashboardLayout>
        <div className="md:hidden bg-gray-900 p-6 max-w-4xl mx-auto
         min-h-screen text-white dark:bg-gray-900
        mb-6 dark:text-white">
             <div className="flex justify-between items-center mb-6"> 
            <h1 className="text-3xl font-bold mb-6"> InvoicePro</h1>

        <ThemeToggle />

        <button
        onClick={() => {
            logout();
            navigate("/login");
        }}
        className="bg-red-600 text-white px-4 py-2 rounded">
            Logout
        </button>

        <Link
        to="/create"
        className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Invoice
        </Link>
        </div>

        <DashboardStats />
        <RevenueChart />

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
            className="border text-blue-800 p-2 rounded"
            >
                <option value="all">All</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
            </select>
        </div>

        <div 
        className="bg-yellow-100 border
        border-yellow-400 text-yellow-800 p-4
        rounded mb-6">
            <h2 className="font-bold mb-2">
                Payment Reminders
            </h2>

            {invoices.filter(
                (invoice) => invoice.status !=="paid" &&
                isOverdue(invoice.dueDate)
            ).length === 0 ? (
                <p>No overdue invoices</p>
            ) : (
                invoices.filter(
                    (invoice) =>
                        invoice.status !== "paid" &&
                    isOverdue(invoice.dueDate)
                ).map((invoice) => (
                    <p key={invoice.id}>
                        Invoice #{invoice.id}is overdue.
                    </p>
                ))
            )}
        </div>

            {invoices.length === 0 ? (
                <p>No Invoices yet</p>
            ): (
                filteredInvoices.map((invoice) => (
                    <div
                    key={invoice.id}
                    className="border p-4 rounded mb-4 shadow
                    bg-white dark:bg-gray-800">
                        <h2 className="font-bold">
                            Invoice #{invoice.id}
                            </h2> 
                            <p>Total: ${invoice.total}</p>
                            
                                <p>
                                    Due:  
                                    {invoice.dueDate || " No due date"}
                                </p>

                            <p
                            className={`font-semibold ${invoice.status === "paid" ? "text-green-500" : "text-red-500"}`}
                            >
                            {invoice.status}
                            </p>

                            {invoice.status !== "paid" && isOverdue(invoice.dueDate) && (
                                <span
                                className="
                                inline-block
                                mt-2 ml-2 bg-red text-white px-3 py-1 rounded text-sm">
                                    Overdue
                                </span>
                            )}

                            <div className="flex gap-3 mt-4">
                                <button
                                onClick={() => {

                                 markAsPaid(invoice.id)
                                    toast.success(
                                        "Invoice Marked As Paid"
                                    );
                                }
                                }

                                className="bg-green-500 text-white px-3 py-1 rounded">
                                    Mark Paid
                                </button>

                                <button
                                onClick={() => {
                                    deleteInvoice(invoice.id)
                                    toast.error(
                                        "Invoice Deleted"
                                    );
                                }
                                    
                                }
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>

                                <Link
                                to={`/invoice/${invoice.id}`}
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    View
                                </Link>

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
    </DashboardLayout>
    );
}

export default Home;
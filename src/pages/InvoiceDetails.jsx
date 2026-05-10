import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { InvoiceContext } from "../context/InvoiceContext";
import generatePDF from "../utils/generatePDF";


function InvoiceDetails() {
    const { id } = useParams();

    const { invoices } = useContext(InvoiceContext);

    const invoice = invoices.find(
        (invoice) => invoice.id === Number(id)
    );

    if (!invoice) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold">
                    Invoice Not found
                </h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex gap-4 items-center mb-6">
                <h1 className="text-3xl font-bold">
                    Invoice Details
                </h1>

                <div className="space-x-4">
                    <Link
                        to="/"
                        className="bg-gray-800 text-white px-4 py-2 rounded"
                    >
                        Back
                    </Link>
                    <button
                        onClick={() => generatePDF(invoice)}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Download PDF
                    </button>
                </div>
            </div>

            <div className="border rounded p-6 shadow">
                <h2 className="text-xl font-bold mb-4">
                    Invoice ${invoice.id}
                </h2>

                <p className="mb-2">
                    Status:
                    <span
                    className={`ml-2 font-bold ${invoice.status === "paid" ? "text-green-500" : "text-red-500"}`}
                    >
                        {invoice.status}
                    </span>
                </p>

                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4">
                        Items
                    </h3>

                <div className="space-y-4">
                    {invoice.items.map(
                        (item, index) => (
                            <div 
                            key={index}
                            className="border p-4 rounded flex justify-between"
                            >
                                <div>
                                    <p className="font-semibold">
                                        {item.name}
                                    </p>

                                    <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div>
                                    <p>${item.price}</p>

                                    <p className="fontbold">
                                        ${item.quantity * item.price}
                                    </p>
                                    </div>
                                    </div>
                                
                        )
                    )}
                </div>
            </div>

            <div className="mt-8 text-right">
                <h2 className="text-2xl font-bold">
                    Total: ${invoice.total}
                </h2>
            </div>
        </div>
  </div>
    );
}

export default InvoiceDetails;
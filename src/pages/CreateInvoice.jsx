import { useState, useContext, useEffect } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { useNavigate, useParams, } from "react-router-dom";


function CreateInvoice() {
    const [items, setItems] = useState([
        {name: "", quantity: 1, price: 0 },
    ]);

    const { invoices, addInvoice, updateInvoice } =
     useContext(InvoiceContext);

     const navigate = useNavigate();
     const { id } = useParams();


    useEffect(() => {
        if (id) {
            const existingInvoice = invoices.find(
                (invoice) => invoice.id === Number(id)
            );

            if (existingInvoice) {
                setItems(existingInvoice.items);
            }
        }
    }, [id, invoices]);


    const addItem = () => {
        setItems([
            ...items,
            { name: "", quantity: 1, price: 0 },
        ]);
    };

    
    
    const handleChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index] [field] = value;
        setItems(newItems);
    };

    const total = items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    const handleSubmit =() => {
        const invoiceData = {
            id: id ? Number(id) : Date.now(),
            items,
            total,
            status: "pending",
        };

        if (id) {
            updateInvoice(invoiceData);
            alert("Invoice Updated!");
        } else {
            addInvoice(invoiceData);
            alert("Invoice Saved!");
        }

        navigate("/");
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                Create Invoice
            </h1>

            {items.map((item, index) => (
                <div
                key={index}
                className="grid grid-cols-3  gap-4 mb-4">
                    <input
                    type="text"
                    placeholder="Item Name"
                    className="border p-2 rounded"
                    value={item.name}
                    onChange={(e) => 
                        handleChange(index, "name", e.target.value)
                    }
                    />

                    <input
                    type="number"
                    placeholder="Quantity"
                    className="border p-2 rounded"
                    value={item.quantity}
                    onChange={(e) => 
                        handleChange(index, "quantity", Number(e.target.value))
                    }
                    />

                    <input
                    type="number"
                    placeholder="Price"
                    className="border p-2 rounded"
                    value={item.price}
                    onChange={(e) => 
                        handleChange(index, "price", Number(e.target.value))
                    }
                    />
                    
                    </div>
            ))}

            <button 
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Item
            </button>

            <h2 className="text-2xl font-bold mt-6">
                Total: ${total}
            </h2>

            <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                Save Invooice
            </button>
        </div>
    );
}

export default CreateInvoice;
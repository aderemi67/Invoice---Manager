import { useState } from "react";

function CreateInvoice() {
    const [items, setItems] = useState([
        {name: "", quantity: 1, price: 0 },
    ]);

    const addItem = () => {
        setItems([
            ...items,
            { name: "", quantity: 1, price: 0 },
        ]);
    };

    const handleChange = (index, field, value)
    => {
        const newItems = [...items];
        newItems[index] [field] = value;
        setItems(newItems);
    };

    const total = items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

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
        </div>
    );
}

export default CreateInvoice;
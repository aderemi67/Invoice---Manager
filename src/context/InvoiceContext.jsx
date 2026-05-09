import { createContext, useState } from "react";

export const InvoiceContext =createContext();

function InvoiceProvider({ children }) {
    const [invoices, setInvoices] = useState([]);

    const addInvoice = (invoice) => {
        setInvoices([...invoices, invoice]);
    };

    return (
        <InvoiceContext.Provider
        value={{
            invoices,
            addInvoice,
        }}
        >
            {children}
        </InvoiceContext.Provider>
    );
}

export default InvoiceProvider;
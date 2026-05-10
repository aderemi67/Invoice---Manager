import { createContext, useState, useEffect } from "react";

export const InvoiceContext =createContext();

function InvoiceProvider({ children }) {
    const [invoices, setInvoices] = useState(() =>
        
    {
        try {
        const savedInvoices = localStorage.getItem("invoices");

        return savedInvoices ?
         JSON.parse(savedInvoices) : [];
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("invoices", JSON.stringify(invoices));
    }, [invoices]);

    const addInvoice = (invoice) =>  {
        setInvoices([...invoices, invoice]);
    };

    const deleteInvoice = (id) => {
        setInvoices(
            invoices.filter((invoice) => invoice.id !== id)
        );
    };

    const markAsPaid = (id) => {
        setInvoices(
            invoices.map((invoice) => invoice.id === id ?
        {...invoice, status: "paid" } : invoice)
        );
    };
    const updateInvoice = (updatedInvoice) => {
        setInvoices(
            invoices.map((invoices) =>
            invoice.id === updatedInvoice.id ? updatedInvoice : invoice)
        );
    };

    return (
        <InvoiceContext.Provider
        value={{
            invoices,
            addInvoice,
            deleteInvoice,
            markAsPaid,
            updateInvoice,
        }}
        >
            {children}
        </InvoiceContext.Provider>
    );

    
}

export default InvoiceProvider;
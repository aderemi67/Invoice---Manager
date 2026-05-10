import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const generatePDF = (invoice) => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Invoice", 14, 22);

    doc.setFontSize(12);

    doc.text(
        `Invoice ID: ${invoice.id}`,
        14,
        35
    );

    doc.text(
        `Status: ${invoice.status}`,
        14,
        45
    );

    const tableData = invoice.items.map(
        (item) => [
            item.name,
            item.quantity,
            `$${item.price}`,
            `$${item.quantity * item.price}`,
        ]
    );

    autoTable(doc, {
        startY: 55,
        head: [
            [
            "Item",
            "Quantity",
            "Price",
            "Total",
            ],
        ],
        body: tableData,
    });

    doc.text(
        `Grand Total: $${invoice.total}`,
        14,
        doc.lastAutoTable.finalY + 20
    );

    doc.save(`invoice-${invoice.id}.pdf`);
};

export default generatePDF;
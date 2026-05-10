import { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

import { InvoiceContext } from "../context/InvoiceContext";

function RevenueChart() {
    const { invoices } = useContext(InvoiceContext);

    const paidRevenue = invoices.filter((invoice) => invoice.status === "paid").reduce(
    (acc, invoice) => acc + invoice.total,
    0
);

const pendingRevenue = invoices
.filter(
    (invoice) => invoice.status === "pending"
).reduce(
    (acc, invoice) => acc + invoice.total,
    0
);

const revenueData = [
    {
        name: "Paid",
        revenue: paidRevenue,
    },
    {
        name: "Pending",
        revenue: pendingRevenue,
    },
];

const invoiceStatusData = [
    {
        name: "Paid",
        value: invoices.filter(
            (invoice) => invoice.status === "paid"
        ).length,
    },
    {
        name: "Pending",
        value: invoices.filter(
            (invoice) => invoice.status === "pending"
        ).length,
    },
];

return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                Revenue Overview
            </h2>

            <ResponsiveContainer
            width="100%"
            height={300}
            >
                <BarChart data={revenueData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar dataKey="revenue" />
                </BarChart>
            </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                Invoice Status
            </h2>

            <ResponsiveContainer
            width="100%"
            height={300}
            >
                <PieChart>
                    <Pie
                    data={invoiceStatusData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                    >
                        <Cell />
                        <Cell />

                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
);
}

export default RevenueChart;
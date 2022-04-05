import React, { useEffect, useState } from 'react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    Pie,
    PieChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";


const Dashboard = () => {
    const [chart, setChart] = useState([]);

    useEffect(() => {
        fetch("./dashboard.JSON")
            .then((res) => res.json())
            .then((data) => {
                setChart(data);
            });
    }, []);

     return (
        <>
        <AreaChart className='p-5'
            width={500}
            height={400}
            data={chart}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey={"investment"}
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
        </AreaChart>



   
        <PieChart width={400} height={400}>
            <Pie className='p-5'
                data={chart}
                dataKey={"investment"}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
            />
            <Pie
                data={chart}
                dataKey={"revenue"}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
            />
            <Tooltip></Tooltip>
            <Pie
                data={chart}
                dataKey={"month"}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
            />
        </PieChart>
    </>
);
};

export default Dashboard;

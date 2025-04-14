import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const Card = ({ title, value, description }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="card-value">{value}</div>
            <p className="card-description">{description}</p>
        </div>
    );
};

export const Table = ({ headers, data }) => {
    if (!data || data.length === 0) {
        return <div className="no-data">No data available</div>;
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const BarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                label: 'Event Count',
                data: data.map(item => item.value),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Event Distribution'
            }
        }
    };

    return <Bar data={chartData} options={options} />;
};

export const LineChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                label: 'Events',
                data: data.map(item => item.value),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Events Over Time'
            }
        }
    };

    return <Line data={chartData} options={options} />;
}; 
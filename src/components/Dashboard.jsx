import React, { useState, useEffect } from 'react';
import { Card, Table, BarChart, LineChart } from './components';
import { getTotalEvents, getEventsByProtocol, getEventsBySeverity, getEventsByCategory, getTopSourceIPs, getEventsByHour } from '../data/analyzeData';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState({
        totalEvents: 0,
        protocolData: [],
        severityData: [],
        categoryData: [],
        topIPs: [],
        hourlyData: []
    });

    useEffect(() => {
        setData({
            totalEvents: getTotalEvents(),
            protocolData: getEventsByProtocol(),
            severityData: getEventsBySeverity(),
            categoryData: getEventsByCategory(),
            topIPs: getTopSourceIPs(),
            hourlyData: getEventsByHour()
        });
    }, []);

    return (
        <div className="dashboard">
            <h1>Network Security Dashboard</h1>
            
            <div className="card-container">
                <Card 
                    title="Total Events" 
                    value={data.totalEvents} 
                    description="Total number of security events"
                />
                <Card 
                    title="Protocol Distribution" 
                    value={data.protocolData.length} 
                    description="Number of different protocols"
                />
                <Card 
                    title="Severity Levels" 
                    value={data.severityData.length} 
                    description="Different severity levels detected"
                />
            </div>

            <div className="chart-container">
                <div className="chart">
                    <h2>Events by Protocol</h2>
                    <BarChart data={data.protocolData} />
                </div>
                
                <div className="chart">
                    <h2>Events by Hour</h2>
                    <LineChart data={data.hourlyData} />
                </div>
            </div>

            <div className="chart-container">
                <div className="chart">
                    <h2>Events by Category</h2>
                    <BarChart data={data.categoryData} />
                </div>
            </div>

            <div className="table-container">
                <h2>Top Source IPs</h2>
                <Table 
                    headers={['IP Address', 'Event Count']}
                    data={data.topIPs}
                />
            </div>
        </div>
    );
};

export default Dashboard; 
// Mock data for demonstration
const mockEvents = [
    { id: 1, proto: 'TCP', alert: { severity: 'High', category: 'Intrusion' }, src_ip: '192.168.1.1', timestamp: '2024-03-20T10:00:00' },
    { id: 2, proto: 'UDP', alert: { severity: 'Medium', category: 'Scan' }, src_ip: '192.168.1.2', timestamp: '2024-03-20T11:00:00' },
    { id: 3, proto: 'TCP', alert: { severity: 'Low', category: 'Access' }, src_ip: '192.168.1.3', timestamp: '2024-03-20T12:00:00' },
    { id: 4, proto: 'ICMP', alert: { severity: 'High', category: 'Intrusion' }, src_ip: '192.168.1.1', timestamp: '2024-03-20T13:00:00' },
    { id: 5, proto: 'TCP', alert: { severity: 'Medium', category: 'Scan' }, src_ip: '192.168.1.4', timestamp: '2024-03-20T14:00:00' },
];

// Use mock data for now
const eveData = mockEvents;

export const getTotalEvents = () => {
    return eveData.length;
};

export const getEventsByProtocol = () => {
    const protocolCounts = eveData.reduce((acc, event) => {
        const protocol = event.proto || 'Unknown';
        acc[protocol] = (acc[protocol] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(protocolCounts).map(([protocol, count]) => ({
        label: protocol,
        value: count
    }));
};

export const getEventsBySeverity = () => {
    const severityCounts = eveData.reduce((acc, event) => {
        const severity = event.alert?.severity || 'Unknown';
        acc[severity] = (acc[severity] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(severityCounts).map(([severity, count]) => ({
        label: severity,
        value: count
    }));
};

export const getEventsByCategory = () => {
    const categoryCounts = eveData.reduce((acc, event) => {
        const category = event.alert?.category || 'Unknown';
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(categoryCounts).map(([category, count]) => ({
        label: category,
        value: count
    }));
};

export const getTopSourceIPs = () => {
    const ipCounts = eveData.reduce((acc, event) => {
        const ip = event.src_ip || 'Unknown';
        acc[ip] = (acc[ip] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(ipCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([ip, count]) => [ip, count]);
};

export const getEventsByHour = () => {
    const hourCounts = eveData.reduce((acc, event) => {
        const hour = new Date(event.timestamp).getHours();
        acc[hour] = (acc[hour] || 0) + 1;
        return acc;
    }, {});

    // Fill in missing hours with 0
    const result = Array.from({ length: 24 }, (_, hour) => ({
        label: `${hour}:00`,
        value: hourCounts[hour] || 0
    }));

    return result;
}; 
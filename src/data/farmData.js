export const sensorInfo = {
    id: "ESP32-SENSOR-001",
    location: "Plot A, North Section",
    battery: "87%",
    signal: "Excellent",
    status: "Online",
    lastUpdated: "0 seconds ago"
};

export const readings = [
    { 
        id: 1, 
        label: "Soil Moisture", 
        value: 45, 
        unit: "%", 
        target: "40 - 60%", 
        status: "Optimal",
        icon: "💧" 
    },
    { 
        id: 2, 
        label: "Soil Temperature", 
        value: 27.9, 
        unit: "°C", 
        target: "22 - 30°C", 
        status: "Optimal",
        icon: "🌡️" 
    }
];

export const farmerData = [
    { id: "F001", name: "Juan dela Cruz", location: "Nueva Ecija", sensor: "ESP32-001", status: "active" },
    { id: "F002", name: "Maria Santos", location: "Bulacan", sensor: "ESP32-002", status: "active" },
    { id: "F003", name: "Pedro Reyes", location: "Pampanga", sensor: "ESP32-003", status: "inactive" }
];
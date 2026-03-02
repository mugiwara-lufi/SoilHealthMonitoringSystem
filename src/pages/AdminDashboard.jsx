import React, { useState } from 'react';
import { farmerData } from '../data/farmData';
import StatCard from '../components/Admin/StatCard';
import FarmerTable from '../components/Admin/FarmerTable';
import LogsTable from '../components/Admin/LogsTable';
import AuditList from '../components/Admin/AuditList';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('farmer');
  const [searchTerm, setSearchTerm] = useState('');

  // --- DATA SOURCES ---
  const masterLogs = [
    { id: "R-9921", farmer: "Juan dela Cruz", fId: "F001", sensor: "ESP32-001", location: "Nueva Ecija", moisture: "45%", temp: "27.9°C", ph: "6.5", status: "Optimal", time: "2026-03-02 11:00 PM" },
    { id: "R-9920", farmer: "Maria Santos", fId: "F002", sensor: "ESP32-002", location: "Bulacan", moisture: "38%", temp: "28.5°C", ph: "6.2", status: "Warning", time: "2026-03-02 10:45 PM" },
    { id: "R-9922", farmer: "Pedro Reyes", fId: "F003", sensor: "ESP32-003", location: "Pampanga", moisture: "14%", temp: "29.5°C", ph: "7.3", status: "Critical", time: "2026-03-02 5:45 PM" }
  ];

  const auditLogs = [
    { id: 1, icon: "👤", action: "User Login", target: "Admin Panel", actor: "System Admin", time: "2 mins ago", type: "Security" },
    { id: 2, icon: "➕", action: "Added Farmer", target: "Pedro Reyes", actor: "Admin User", time: "1 hour ago", type: "Management" },
    { id: 3, icon: "➕", action: "Added Farmer", target: "Maria Santos", actor: "Admin User", time: "4 hour ago", type: "Management" }
  ];

  // --- CONSOLIDATED SEARCH LOGIC ---
  const search = searchTerm.toLowerCase();

  // 1. Filter Farmers
  const filteredFarmers = farmerData.filter(f => 
    f.name.toLowerCase().includes(search) ||
    f.id.toLowerCase().includes(search) ||
    f.location.toLowerCase().includes(search) ||
    f.sensor.toLowerCase().includes(search) ||
    f.status.toLowerCase().includes(search)
  );

  // 2. Filter Master Logs
  const filteredMasterLogs = masterLogs.filter(l => 
    l.id.toLowerCase().includes(search) ||
    l.farmer.toLowerCase().includes(search) ||
    l.fId.toLowerCase().includes(search) ||
    l.sensor.toLowerCase().includes(search) ||
    l.location.toLowerCase().includes(search) ||
    l.moisture.includes(searchTerm) || // Numbers usually search better without lowercase
    l.temp.includes(searchTerm) ||
    l.ph.includes(searchTerm) ||
    l.status.toLowerCase().includes(search) ||
    l.time.toLowerCase().includes(search)
  );

  // 3. Filter Audit Logs
  const filteredAuditLogs = auditLogs.filter(a => 
    a.action.toLowerCase().includes(search) ||
    a.target.toLowerCase().includes(search) ||
    a.actor.toLowerCase().includes(search) ||
    a.type.toLowerCase().includes(search) ||
    a.time.toLowerCase().includes(search)
  );

  return (
    <main className="admin-wrapper">
      <div style={{ backgroundColor: 'var(--farm-green)', padding: '20px 0' }}>
        <nav className="admin-nav" style={{ background: 'transparent', borderBottom: 'none' }}>
          <div className="admin-logo-section">
            <div className="brand-icon">🌱</div>
            <h1 style={{ margin: 0, fontSize: '2.5rem', color: 'black', fontWeight: 'bold' }}>
              Soil Health Monitoring System
            </h1>
          </div>
          <div className="admin-profile">
            <div className="user-text">
              <span className="user-name" style={{ color: 'black' }}>Admin User</span>
              <span className="user-role" style={{ color: 'white' }}>Administrator</span>
            </div>
            <div className="avatar">AU</div>
          </div>
        </nav>
        <div style={{ padding: '0 40px' }}>
          <p style={{ margin: 0, color: 'black', opacity: 0.9 }}>Administrative Dashboard</p>
        </div>
      </div>

      <div className="admin-content">
        <section className="stats-container">
          <StatCard label="Total Farmers" value="3" icon="👥" color="blue" />
          <StatCard label="Active Sensors" value="2" icon="📈" color="green" />
          <StatCard label="Total Readings" value="4" icon="📊" color="purple" />
          <StatCard label="Critical Alerts" value="1" icon="⚠️" color="red" />
        </section>

        <div className="admin-tabs">
          <button button={`tab ${activeTab === 'farmer' ? 'active' : ''}`} onClick={() => {setActiveTab('farmer'); setSearchTerm('');}}>Farmer Accounts</button>
          <button button={`tab ${activeTab === 'logs' ? 'active' : ''}`} onClick={() => {setActiveTab('logs'); setSearchTerm('');}}>Master Data Logs</button>
          <button button={`tab ${activeTab === 'audit' ? 'active' : ''}`} onClick={() => {setActiveTab('audit'); setSearchTerm('');}}>System Audit Trail</button>
        </div>

        <section className="management-card">
          <div className="table-header">
            <h2 style={{ margin: 0 }}>
              {activeTab === 'farmer' ? 'Farmer Account Management' : activeTab === 'logs' ? 'Data Logs' : 'Audit Trail'}
            </h2>
            <div className="control-group">
            <div className="search-wrapper">
              <label htmlFor="admin-search" style={{ display: 'none' }}>Search Records</label>
              <input 
                id="admin-search"
                type="text" 
                placeholder="Search visible data..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
               <button button="btn-export">🔍 Filter</button>
               <button button="btn-export">📤 Export Data</button>
            </div>
          </div>
          
          {/* CONTENT SWITCHER USING FILTERED DATA */}
          {activeTab === 'farmer' && <FarmerTable data={filteredFarmers} />}
          {activeTab === 'logs' && <LogsTable data={filteredMasterLogs} />}
          {activeTab === 'audit' && <AuditList data={filteredAuditLogs} />}
        </section>
      </div>

      <footer className="admin-footer">
        <div className="footer-content">
          <span>© 2026 Soil Health Monitoring System</span>
          <div className="footer-status-pill"><span className="dot green"></span> System Status: Optimal</div>
        </div>
      </footer>
    </main>
  );
};

export default AdminDashboard;
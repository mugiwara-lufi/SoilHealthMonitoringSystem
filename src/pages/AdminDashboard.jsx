import React, { useState } from 'react';
import { farmerData } from '../data/farmData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('farmer');
  const [searchTerm, setSearchTerm] = useState('');

  const masterLogs = [
    { id: 'R001', farmer: 'Juan dela Cruz', fId: 'F001', sensor: 'ESP32-001', location: 'Nueva Ecija - Plot A', moisture: '45%', temp: '28°C', ph: '6.5', status: 'optimal', time: '2026-02-13 14:30:00' },
    { id: 'R002', farmer: 'Maria Santos', fId: 'F002', sensor: 'ESP32-002', location: 'Bulacan - Field 1', moisture: '25%', temp: '32°C', ph: '7.2', status: 'critical', time: '2026-02-13 14:28:00' },
    { id: 'R003', farmer: 'Juan dela Cruz', fId: 'F001', sensor: 'ESP32-001', location: 'Nueva Ecija - Plot A', moisture: '38%', temp: '29°C', ph: '6.8', status: 'warning', time: '2026-02-13 14:25:00' },
    { id: 'R004', farmer: 'Maria Santos', fId: 'F002', sensor: 'ESP32-002', location: 'Bulacan - Field 1', moisture: '52%', temp: '26°C', ph: '6.9', status: 'optimal', time: '2026-02-13 14:23:00' },
  ];

  const auditLogs = [
    { id: 1, action: 'Created new farmer account', target: 'Pedro Reyes (F003)', actor: 'Admin User', time: '2026-02-13 09:15:00', type: 'User', icon: '👥' },
    { id: 2, action: 'Updated moisture threshold', target: 'System Settings', actor: 'Admin User', time: '2026-02-12 16:30:00', type: 'Threshold', icon: '📈' },
    { id: 3, action: 'Deactivated farmer account', target: 'Pedro Reyes (F003)', actor: 'Admin User', time: '2026-02-12 14:20:00', type: 'User', icon: '👥' },
  ];

  const lowerSearch = searchTerm.toLowerCase();

  // Optimized logic: Checks every value in the object row
  const filteredFarmers = farmerData.filter(f => 
    Object.values(f).some(val => String(val).toLowerCase().includes(lowerSearch))
  );

  const filteredMasterLogs = masterLogs.filter(l => 
    Object.values(l).some(val => String(val).toLowerCase().includes(lowerSearch))
  );

  const filteredAuditLogs = auditLogs.filter(a => 
    Object.values(a).some(val => String(val).toLowerCase().includes(lowerSearch))
  );

  return (
    <main className="admin-wrapper">
      <header className="admin-nav">
        <div className="admin-logo-section">
          <div className="brand-icon">🌱</div>
          <div>
            <h1>Soil Health Monitoring System</h1>
            <p>Administrative Dashboard</p>
          </div>
        </div>
        <div className="admin-profile">
          <div className="user-text">
            <span className="user-name">Admin User</span>
            <span className="user-role">Administrator</span>
          </div>
          <div className="avatar">AU</div>
        </div>
      </header>

      <div className="admin-content">
        <section className="stats-container">
          <div className="stat-card">
            <div className="stat-left"><label>Total Farmers</label><div className="stat-value">3</div></div>
            <div className="stat-icon blue">👥</div>
          </div>
          <div className="stat-card">
            <div className="stat-left"><label>Active Sensors</label><div className="stat-value text-green">2</div></div>
            <div className="stat-icon green">📈</div>
          </div>
          <div className="stat-card">
            <div className="stat-left"><label>Total Readings</label><div className="stat-value">4</div></div>
            <div className="stat-icon purple">📊</div>
          </div>
          <div className="stat-card">
            <div className="stat-left"><label>Critical Alerts</label><div className="stat-value text-red">1</div></div>
            <div className="stat-icon red">⚠️</div>
          </div>
        </section>

        <nav className="admin-tabs">
          <button className={`tab ${activeTab === 'farmer' ? 'active' : ''}`} onClick={() => {setActiveTab('farmer'); setSearchTerm('');}}>Farmer Accounts</button>
          <button className={`tab ${activeTab === 'logs' ? 'active' : ''}`} onClick={() => {setActiveTab('logs'); setSearchTerm('');}}>Master Data Logs</button>
          <button className={`tab ${activeTab === 'audit' ? 'active' : ''}`} onClick={() => {setActiveTab('audit'); setSearchTerm('');}}>System Audit Trail</button>
        </nav>

        <section className="management-card">
          <div className="table-header">
            <h2>{activeTab === 'farmer' ? 'Farmer Account Management' : activeTab === 'logs' ? 'Master Data Logs' : 'System Audit Trail'}</h2>
            <div className="control-group">
              <div className="search-wrapper">
                <input 
                  type="text" 
                  placeholder={`Search by any field...`} 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="btn-filter">🔍 Filter</button>
              <button className="btn-export">📥 Export {activeTab === 'audit' ? 'Logs' : 'Data'}</button>
            </div>
          </div>

          {activeTab === 'audit' ? (
            <div className="audit-list">
              {filteredAuditLogs.length > 0 ? (
                filteredAuditLogs.map((log) => (
                  <div key={log.id} className="audit-item">
                    <div className="audit-icon-box">{log.icon}</div>
                    <div className="audit-details">
                      <h3>{log.action}</h3>
                      <p>Target: <strong>{log.target}</strong></p>
                      <span>By {log.actor} • {log.time}</span>
                    </div>
                    <div className="audit-tag">{log.type}</div>
                  </div>
                ))
              ) : (
                <div style={{padding: '40px', textAlign: 'center', color: '#718096'}}>No matches found for "{searchTerm}"</div>
              )}
            </div>
          ) : (
            <table className="farmer-table">
              {activeTab === 'farmer' ? (
                <>
                  <thead><tr><th>Farmer ID</th><th>Name</th><th>Contact</th><th>Location</th><th>Sensor ID</th><th>Status</th><th>Actions</th></tr></thead>
                  <tbody>
                    {filteredFarmers.length > 0 ? (
                      filteredFarmers.map((f) => (
                        <tr key={f.id}>
                          <td><strong>{f.id}</strong></td>
                          <td>{f.name}</td>
                          <td className="contact-cell">{f.name.toLowerCase().replace(' ', '')}@email.com<br/><span>+63 912 345 6789</span></td>
                          <td>{f.location}</td>
                          <td><span className="sensor-tag">{f.sensor}</span></td>
                          <td><span className={`status-pill ${f.status}`}>{f.status}</span></td>
                          <td><button className="dots-btn">⋮</button></td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="7" style={{textAlign: 'center', padding: '40px', color: '#718096'}}>No farmers found matching "{searchTerm}"</td></tr>
                    )}
                  </tbody>
                </>
              ) : (
                <>
                  <thead><tr><th>Reading ID</th><th>Farmer</th><th>Sensor ID</th><th>Location</th><th>Moisture</th><th>Temp</th><th>pH</th><th>Status</th><th>Timestamp</th></tr></thead>
                  <tbody>
                    {filteredMasterLogs.length > 0 ? (
                      filteredMasterLogs.map((l) => (
                        <tr key={l.id}>
                          <td><strong>{l.id}</strong></td>
                          <td className="contact-cell">{l.farmer}<br/><span>{l.fId}</span></td>
                          <td><span className="sensor-tag">{l.sensor}</span></td>
                          <td>{l.location}</td>
                          <td>💧 {l.moisture}</td><td>🌡️ {l.temp}</td><td>{l.ph}</td>
                          <td><span className={`status-pill ${l.status}`}>{l.status}</span></td>
                          <td>{l.time}</td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="9" style={{textAlign: 'center', padding: '40px', color: '#718096'}}>No readings found matching "{searchTerm}"</td></tr>
                    )}
                  </tbody>
                </>
              )}
            </table>
          )}
        </section>
      </div>

      <footer className="admin-footer">
        <div className="footer-content">
          <p>&copy; 2026 Soil Health Monitoring System | Administrative Portal</p>
          <div className="footer-status-pill">
            <span className="dot green"></span> System Status: Optimal
          </div>
        </div>
      </footer>
    </main>
  );
};

export default AdminDashboard;
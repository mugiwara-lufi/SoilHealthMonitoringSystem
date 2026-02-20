// src/pages/LiveMonitor.jsx
import React from 'react';
import { sensorInfo, readings } from '../data/farmData';

const LiveMonitor = () => {
  return (
    <main className="mobile-wrapper">
      {/* Green Header Section - Fixed at top */}
      <header className="brand-header">
        <div className="header-top">
          <div>
            <h1>Live Farm Monitor</h1>
            <p>Plot A - Rice Field</p>
          </div>
          <div style={{ fontSize: '2rem' }}>🚦</div>
        </div>
        <div className="header-status">
          <span>📡 Sensor {sensorInfo.status}</span>
          <button className="refresh-btn">🔄 Refresh</button>
        </div>
      </header>

      {/* This new wrapper handles the scrolling cards */}
      <div className="scrollable-content">
        {/* Timestamp Bar */}
        <section className="update-bar">
          🕒 Last Updated: {sensorInfo.lastUpdated}
        </section>

        <div className="content-area">
          {/* Overall Status Card */}
          <div className="summary-card">
            <span style={{ fontSize: '1.5rem' }}>✅</span>
            <div>
              <h3 style={{ margin: 0 }}>All Systems Normal</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
                Soil conditions are optimal. No action needed.
              </p>
            </div>
          </div>

          {/* Dynamic Sensor Cards */}
          {readings.map((item) => (
            <section key={item.id} className="sensor-card">
              <div className="card-header">
                <span>{item.icon}</span>
                <span className="badge-optimal">{item.status}</span>
              </div>
              <label style={{ color: '#777', fontWeight: '600' }}>{item.label}</label>
              <div className="reading-value">
                {item.value}<small>{item.unit}</small>
              </div>
              <hr style={{ opacity: 0.2 }} />
              <p style={{ margin: '10px 0 0 0', fontSize: '0.85rem' }}>
                Target Range: <strong>{item.target}</strong>
              </p>
            </section>
          ))}

          {/* Quick Tips Section */}
          <section className="tips-card">
            <div className="tips-header">
              <span>🗂️</span>
              <h3 style={{ margin: 0 }}>Quick Tips</h3>
            </div>
            <ul className="tips-list">
              <li>
                <span className="dot green"></span>
                <strong>Green light</strong> = Soil conditions perfect for rice growth
              </li>
              <li>
                <span className="dot yellow"></span>
                <strong>Yellow light</strong> = Monitor closely, adjustment may be needed
              </li>
              <li>
                <span className="dot red"></span>
                <strong>Red light</strong> = Take immediate action to protect your crop
              </li>
              <li>
                <span className="dot blue"></span>
                Pull down to refresh or tap the Refresh button
              </li>
            </ul>
          </section>

          {/* Sensor Information Table */}
          <section className="info-card">
            <h3 style={{ margin: '0 0 10px 0' }}>Sensor Information</h3>
            <div className="info-grid">
              <span>Sensor ID:</span> <strong>{sensorInfo.id}</strong>
              <span>Location:</span> <strong>{sensorInfo.location}</strong>
              <span>Battery:</span> <strong className="text-green">{sensorInfo.battery}</strong>
              <span>Signal:</span> <strong className="text-green">{sensorInfo.signal}</strong>
            </div>
          </section>
        </div>
      </div>

      {/* Sticky Mobile Footer - Fixed at bottom */}
      <footer className="mobile-sticky-footer">
        <p>🌱 Soil Health Monitor v1.0</p>
        <span>Last Sync: {new Date().toLocaleTimeString()}</span>
      </footer>
    </main>
  );
};

export default LiveMonitor;
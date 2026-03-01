import React from 'react';

const MobileHeader = ({ title, location, status, onRefresh }) => {
  return (
    <header className="brand-header">
      <div className="header-top">
        <div>
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div style={{ fontSize: '2rem' }}>🚦</div>
      </div>
      <div className="header-status">
        <span>📡 Sensor {status}</span>
        <button className="refresh-btn" onClick={onRefresh}>🔄 Refresh</button>
      </div>
    </header>
  );
};

export default MobileHeader;
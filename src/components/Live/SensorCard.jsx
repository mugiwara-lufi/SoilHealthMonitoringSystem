import React from 'react';
import StatusPill from '../Common/StatusPill';

const SensorCard = ({ icon, label, value, unit, target, status }) => {
  return (
    <section className="sensor-card">
      <div className="card-header">
        <span>{icon}</span>
        <StatusPill status={status} />
      </div>
      <label style={{ color: '#777', fontWeight: '600' }}>{label}</label>
      <div className="reading-value">
        {value}<small>{unit}</small>
      </div>
      <hr style={{ opacity: 0.2 }} />
      <p style={{ margin: '10px 0 0 0', fontSize: '0.85rem' }}>
        Target Range: <strong>{target}</strong>
      </p>
    </section>
  );
};

export default SensorCard;
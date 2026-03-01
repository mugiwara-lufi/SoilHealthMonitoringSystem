import React from 'react';
import StatusPill from '../Common/StatusPill';

const FarmerTable = ({ data }) => {
  return (
    <table className="farmer-table">
      <thead>
        <tr>
          <th>Farmer ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Location</th>
          <th>Sensor ID</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((f) => (
            <tr key={f.id}>
              <td><strong>{f.id}</strong></td>
              <td>{f.name}</td>
              <td className="contact-cell">
                {f.name.toLowerCase().replace(' ', '')}@email.com
                <br />
                <span>+63 912 345 6789</span>
              </td>
              <td>{f.location}</td>
              <td><span className="sensor-tag">{f.sensor}</span></td>
              <td><StatusPill status={f.status} /></td>
              <td><button className="dots-btn">⋮</button></td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#718096' }}>
              No farmers found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default FarmerTable;
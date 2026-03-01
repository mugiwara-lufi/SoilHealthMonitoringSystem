import React from 'react';

const AuditList = ({ data }) => {
  return (
    <div className="audit-list">
      {data.length > 0 ? (
        data.map((log) => (
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
        <div style={{ padding: '40px', textAlign: 'center', color: '#718096' }}>
          No audit logs found.
        </div>
      )}
    </div>
  );
};

export default AuditList;
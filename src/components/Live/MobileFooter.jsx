import React from 'react';

const MobileFooter = () => {
  const lastSync = "11:00:31 PM"; // You can later make this dynamic with props

  return (
    <footer className="mobile-sticky-footer">
      <p>🌱 Soil Health Monitor v1.0</p>
      <span style={{ fontSize: '0.7rem' }}>Last Sync: {lastSync}</span>
    </footer>
  );
};

export default MobileFooter;
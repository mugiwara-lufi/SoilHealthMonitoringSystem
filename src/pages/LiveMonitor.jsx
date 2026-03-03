import { sensorInfo, readings } from '../data/farmData';
import MobileHeader from '../components/Live/MobileHeader';
import SensorCard from '../components/Live/SensorCard';
import MobileFooter from '../components/Live/MobileFooter'; // Import added here

const LiveMonitor = () => {
  return (
    <main className="mobile-wrapper">
      <MobileHeader 
        title="Live Farm Monitor" 
        location="Plot A - Rice Field"
        status={sensorInfo.status}
        onRefresh={() => window.location.reload()}
      />

      <div className="scrollable-content">
        <section className="update-bar">
          🕒 Last Updated: {sensorInfo.lastUpdated}
        </section>

        <div className="content-area">
          <div className="summary-card" style={{ borderLeft: '6px solid #00c853' }}>
            <div style={{ fontSize: '1.5rem' }}>✅</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1rem' }}>All Systems Normal</h3>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#666' }}>Soil conditions are optimal. No action needed.</p>
            </div>
          </div>

          {readings.map((item) => (
            <SensorCard key={item.id} {...item} />
          ))}

          {/* Quick Tips Card Added Back */}
          <div className="tips-card">
            <div className="tips-header">
              <span>📂</span>
              <h3>Quick Tips</h3>
            </div>
            <ul className="tips-list">
              <li><span className="dot green"></span> <strong>Green light:</strong> &nbsp;= Soil conditions perfect for rice growth</li>
              <li><span className="dot yellow"></span> <strong>Yellow light:</strong> &nbsp;= Monitor closely, adjustment may be needed</li>
              <li><span className="dot red"></span> <strong>Red light:</strong> &nbsp;= Take immediate action to protect your crop</li>
              <li><span className="dot blue"></span> Pull down to refresh or tap the Refresh button</li>
            </ul>
          </div>

          <div className="info-card">
            <h3 style={{ fontSize: '1rem', marginBottom: '15px' }}>Sensor Information</h3>
            <div className="info-grid">
              <span style={{ color: '#777' }}>Sensor ID:</span> <strong>{sensorInfo.id}</strong>
              <span style={{ color: '#777' }}>Location:</span> <strong>{sensorInfo.location}</strong>
              <span style={{ color: '#777' }}>Battery:</span> <strong style={{ color: '#00c853' }}>{sensorInfo.battery}</strong>
              <span style={{ color: '#777' }}>Signal:</span> <strong style={{ color: '#00c853' }}>{sensorInfo.signal}</strong>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer is now a separate component */}
      <MobileFooter />
    </main>
  );
};

export default LiveMonitor;
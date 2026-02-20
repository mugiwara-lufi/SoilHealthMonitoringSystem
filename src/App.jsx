import { useState } from 'react';
import LiveMonitor from './pages/LiveMonitor';
import AdminDashboard from './pages/AdminDashboard';
import './styles/App.css';

function App() {
  const [view, setView] = useState('mobile'); 

  return (
    // The "view-mobile" or "view-admin" class helps CSS apply different background logic
    <div className={`App ${view === 'mobile' ? 'view-mobile' : 'view-admin'}`}>
      
      {/* Platform Switcher */}
      <div className="view-toggle-nav">
        <button 
          className={view === 'mobile' ? 'active' : ''} 
          onClick={() => setView('mobile')}
        >
          📱 Mobile (Farmer)
        </button>
        <button 
          className={view === 'admin' ? 'active' : ''} 
          onClick={() => setView('admin')}
        >
          💻 Web (Admin)
        </button>
      </div>

      {/* Main View Container */}
      {view === 'mobile' ? (
        <div className="mobile-screen-center">
          <div className="mobile-app-container">
             <LiveMonitor />
          </div>
        </div>
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
}

export default App;
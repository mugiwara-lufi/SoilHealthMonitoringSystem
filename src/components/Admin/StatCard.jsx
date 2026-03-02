const StatCard = ({ label, value, icon, color, textColor }) => {
  return (
    <div className="stat-card">
      <div className="stat-left">
        <label>{label}</label>
        <div className={`stat-value ${textColor || ''}`}>{value}</div>
      </div>
      <div className={`stat-icon ${color}`}>{icon}</div>
    </div>
  );
};

export default StatCard;
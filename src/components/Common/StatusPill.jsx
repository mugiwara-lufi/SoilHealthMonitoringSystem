const StatusPill = ({ status, children }) => {
  return (
    <span className={`status-pill ${status.toLowerCase()}`}>
      {children || status}
    </span>
  );
};

export default StatusPill;
import StatusPill from '../Common/StatusPill';

const LogsTable = ({ data }) => {
  return (
    <table className="farmer-table">
      <thead>
        <tr>
          <th>Reading ID</th>
          <th>Farmer</th>
          <th>Sensor ID</th>
          <th>Location</th>
          <th>Moisture</th>
          <th>Temp</th>
          <th>pH</th>
          <th>Status</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((l) => (
            <tr key={l.id}>
              <td><strong>{l.id}</strong></td>
              <td className="contact-cell">{l.farmer}<br/><span>{l.fId}</span></td>
              <td><span className="sensor-tag">{l.sensor}</span></td>
              <td>{l.location}</td>
              <td>💧 {l.moisture}</td>
              <td>🌡️ {l.temp}</td>
              <td>{l.ph}</td>
              <td><StatusPill status={l.status} /></td>
              <td>{l.time}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="9" style={{ textAlign: 'center', padding: '40px', color: '#718096' }}>
              No readings found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default LogsTable;
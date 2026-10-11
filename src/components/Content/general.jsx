const info = [
  { label: "Roll", value: "125" },
  { label: "Academic Year", value: "2020" },
  { label: "Gender", value: "Male" },
  { label: "Religion", value: "Group" },
  { label: "blood", value: "B+" },
];

function General() {
  return (
    <div className="card">
      <h2 className="card-title"><span className="icon"></span>General Information</h2>
      <table className="info-table">
        <tbody>
          {info.map(({ label, value }) => (
            <tr key={label}>
              <td className="info-label">{label}</td>
              <td className="info-sep">:</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default General;

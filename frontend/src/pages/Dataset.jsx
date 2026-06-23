import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./Pages.css";

function Dataset() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/data/AccidentsBig.csv", {
      download: true,
      header: true,
      complete: (results) => setData(results.data),
    });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>📄 Accident Dataset Viewer</h1>
      <div style={{ overflowX: "auto", marginTop: "2rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key} style={{ padding: "1rem", color: "#A0A9B8" }}>
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 50).map((row, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  color: "#E2E8F0",
                }}
              >
                {Object.values(row).map((val, j) => (
                  <td key={j} style={{ padding: "0.8rem" }}>
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dataset;

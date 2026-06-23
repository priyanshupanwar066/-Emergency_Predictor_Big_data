import { useEffect, useState } from "react";

export default function Stats() {
  const [count, setCount] = useState({ data: 0, hours: 0, grids: 0 });

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < 100) {
        setCount({
          data: i * 1000,
          hours: i,
          grids: i * 5,
        });
        i++;
      } else clearInterval(timer);
    }, 30);
  }, []);

  return (
    <div className="stats">
      <div className="stat">
        <h3>{count.data.toLocaleString()}+</h3>
        <p>Accident Records</p>
      </div>
      <div className="stat">
        <h3>{count.hours}</h3>
        <p>Hourly Predictions</p>
      </div>
      <div className="stat">
        <h3>{count.grids}</h3>
        <p>Geo-Grid Clusters</p>
      </div>
    </div>
  );
}

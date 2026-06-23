import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FiTrendingUp, FiAlertTriangle, FiMapPin, FiClock } from "react-icons/fi";
import Papa from "papaparse";
import "./Pages.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    fetch("/data/risk_summary.json")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((d) => ({
          ...d,
          risk_level:
            d.risk_score > 120
              ? "high"
              : d.risk_score > 80
              ? "medium"
              : "low",
        }));
        setData(formatted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Sample data for charts
  const hourlyData = [
    { hour: "00:00", incidents: 15, predicted: 18 },
    { hour: "04:00", incidents: 12, predicted: 14 },
    { hour: "08:00", incidents: 28, predicted: 32 },
    { hour: "12:00", incidents: 45, predicted: 48 },
    { hour: "16:00", incidents: 38, predicted: 41 },
    { hour: "20:00", incidents: 32, predicted: 35 },
    { hour: "24:00", incidents: 20, predicted: 22 },
  ];

  const riskDistribution = [
    { name: "High Risk", value: 35, color: "#FF6B6B" },
    { name: "Medium Risk", value: 45, color: "#FFA07A" },
    { name: "Low Risk", value: 20, color: "#4ECDC4" },
  ];

  const regionStats = [
    { name: "Downtown", incidents: 156, trend: "+12%" },
    { name: "Suburbs", incidents: 89, trend: "-5%" },
    { name: "Highway", incidents: 203, trend: "+8%" },
    { name: "Airport Area", incidents: 67, trend: "-2%" },
  ];

  const statsCards = [
    {
      icon: <FiAlertTriangle size={24} />,
      label: "Critical Alerts",
      value: data.filter((d) => d.risk_score > 120).length,
      color: "#FF6B6B",
    },
    {
      icon: <FiTrendingUp size={24} />,
      label: "Total Incidents",
      value: data.length,
      color: "#FFA07A",
    },
    {
      icon: <FiMapPin size={24} />,
      label: "Regions Monitored",
      value: `${data.length > 0 ? "500+" : "0"}`,
      color: "#4ECDC4",
    },
    {
      icon: <FiClock size={24} />,
      label: "Avg Risk Score",
      value: data.length
        ? (data.reduce((a, b) => a + b.risk_score, 0) / data.length).toFixed(1)
        : "0",
      color: "#45B7D1",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ textAlign: "center", padding: "4rem" }}
        >
          <p style={{ fontSize: "1.2rem", color: "#A0A9B8" }}>
            ⏳ Loading dashboard...
          </p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <p style={{ fontSize: "1.2rem", color: "#FF6B6B" }}>❌ Error: {error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>🗺️ Emergency Risk Dashboard</h1>
        <p>Real-time monitoring and predictive analytics for accident prevention</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="filters-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {["all", "high", "medium", "low"].map((filter) => (
          <motion.button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} Risk
          </motion.button>
        ))}
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="dashboard-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {statsCards.map((card, index) => (
          <motion.div
            key={index}
            className="chart-container"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  background: `${card.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: card.color,
                }}
              >
                {card.icon}
              </div>
              <div>
                <p style={{ margin: 0, color: "#A0A9B8", fontSize: "0.9rem" }}>
                  {card.label}
                </p>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: card.color,
                  }}
                >
                  {card.value}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.div
        className="dashboard-grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="chart-container" variants={itemVariants}>
          <h3>📊 Hourly Incident Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="hour" stroke="#A0A9B8" />
              <YAxis stroke="#A0A9B8" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="incidents" stroke="#FF6B6B" />
              <Line type="monotone" dataKey="predicted" stroke="#4ECDC4" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="chart-container" variants={itemVariants}>
          <h3>🧭 Risk Level Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskDistribution}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {riskDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>

      {/* 🚦 Full Data Table */}
      <motion.div
        className="chart-container"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>📋 Detailed Accident Risk Records ({data.length} total)</h3>
        <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
                <th style={th}>Grid ID</th>
                <th style={th}>State</th>
                <th style={th}>City</th>
                <th style={th}>Hour</th>
                <th style={th}>Latitude</th>
                <th style={th}>Longitude</th>
                <th style={th}>Accidents</th>
                <th style={th}>Risk Score</th>
                <th style={th}>Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 15).map((item, i) => (
                <motion.tr
                  key={i}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <td style={td}>{item.grid_id}</td>
                  <td style={td}>{item.state}</td>
                  <td style={td}>{item.city || "N/A"}</td>
                  <td style={td}>{item.hour}</td>
                  <td style={td}>{item.lat?.toFixed(3)}</td>
                  <td style={td}>{item.lon?.toFixed(3)}</td>
                  <td style={td}>{item.accidents}</td>
                  <td style={td}>{item.risk_score}</td>
                  <td
                    style={{
                      ...td,
                      color:
                        item.risk_level === "high"
                          ? "#FF6B6B"
                          : item.risk_level === "medium"
                          ? "#FFA07A"
                          : "#4ECDC4",
                      fontWeight: 600,
                    }}
                  >
                    {item.risk_level.toUpperCase()}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

// Table cell styles
const th = {
  textAlign: "left",
  padding: "1rem",
  color: "#A0A9B8",
  fontWeight: 600,
};
const td = {
  padding: "1rem",
  color: "#E2E8F0",
};

export default Dashboard;

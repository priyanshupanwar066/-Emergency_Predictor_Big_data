import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSimple from "./pages/HomeSimple";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSimple />} />
      </Routes>
    </Router>
  );
}

export default App;

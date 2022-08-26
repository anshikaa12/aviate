import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import JobsDashboard from "./pages/jobsDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<JobsDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

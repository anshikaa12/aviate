import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import JobsDashboard from "./pages/jobsDashboard";
import SingleJob from "./pages/singleJob";
import Messages from "./pages/messages";
import Settings from "./pages/settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<JobsDashboard />} />
        <Route path="/dashboard/:jobid" element={<SingleJob />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;

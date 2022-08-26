import React from "react";
import Jobs from "../components/jobs";
import Nav from "../components/Nav";
import Sidebar from "../components/sidebar";
function JobsDashboard() {
  return (
    <div>
      <Nav />
      <div className="main-sec flex-row">
        <Sidebar />
        <Jobs />
      </div>
    </div>
  );
}

export default JobsDashboard;

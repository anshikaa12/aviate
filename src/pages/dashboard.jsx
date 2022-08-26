import React from "react";
import Applied from "../components/applied";
import Nav from "../components/Nav";
import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";

function Dashboard() {
  return (
    <div>
      <Nav />
      <div className="main-sec flex-row">
        <Sidebar />
        <Applied />
        <Recommended />
      </div>
    </div>
  );
}

export default Dashboard;

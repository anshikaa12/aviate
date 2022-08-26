import React from "react";
import AppliedJobs from "./appliedJobs";

function Applied() {
  return (
    <div className="applied-box flex-col">
      <h1 className="h1-text">Applied Jobs</h1>
      <div className="status-filter flex-row">
        <div className="all tab">Show All</div>
        <div className="pending tab">Pending</div>
        <div className="accepted tab">Accepted</div>
        <div className="rejected tab">Rejected</div>
      </div>
      <AppliedJobs />
    </div>
  );
}

export default Applied;

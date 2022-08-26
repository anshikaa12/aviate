import React from "react";
import JobsList from "./jobsList";

function Jobs() {
  return (
    <div className="jobs flex-col">
      <h1 className="h1-text prime-color-text">Search For Jobs</h1>
      <div className="jobs-list flex-col">
        <JobsList />
      </div>
    </div>
  );
}

export default Jobs;

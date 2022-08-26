import React from "react";
import JobsList from "./jobsList";

function Recommended() {
  return (
    <div className="recommend-box flex-col">
      <h2 className="h2-text flex-row-center">Recommended Jobs</h2>
      <div className="recommended-job flex-col-center">
        <JobsList />
      </div>
    </div>
  );
}

export default Recommended;

import React from "react";
import { useJobs } from "../context/appliedJobsContext";
import { AllJobsList } from "../database/jobsDB";
function JobsList() {
  const { jobsDispatch } = useJobs();
  return AllJobsList.map((job) => {
    return (
      <div className="basic-card job-card">
        <div className="card-header">
          <div className="header-text">
            <div className="flex-row card-head">
              <img
                alt=".."
                src={job.companyLogo}
                class="avatar-box avatar-small"
              />
              <h4 className="card-title">{job.companyName}</h4>
            </div>
            <span className="card-subtext ">{job.jobName}</span>
            <p className="card-content ">{job.companyDescription}</p>
            <p className="h5-text ">{job.pay}</p>
          </div>
        </div>

        <div className="card-footer">
          <button className="card-btn">Save</button>
          <button
            className="card-btn"
            onClick={() => jobsDispatch({ type: "ADDJOB", payload: job })}
          >
            Apply
          </button>
        </div>
      </div>
    );
  });
}

export default JobsList;

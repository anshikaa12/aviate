import React from "react";
import { useJobs } from "../context/appliedJobsContext";
import { useCategoryContext } from "../context/categoryContext";
import { useNavigate } from "react-router-dom";
function AppliedJobs() {
  const { jobsState } = useJobs();
  const { categoryState } = useCategoryContext();
  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/dashboard/${id}`;
    navigate(path);
  };
  return categoryState.categories === "All"
    ? jobsState.jobs.map((job) => {
        return (
          <div className="applied-job-list flex-col">
            <div
              className="basic-card applied-card"
              onClick={() => routeChange(job.id)}
              key={job.id}
            >
              <div className="card-header">
                <div className="flex-row card-head">
                  <img
                    alt=".."
                    src={job.companyLogo}
                    className="avatar-box avatar-mid"
                  />
                  <div className="flex-col">
                    <h3 className="card-title h3-text">{job.companyName}</h3>
                    <span className="card-subtext ">{job.jobName}</span>
                    <span className="app-status card-subtext">
                      {job.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    : jobsState.jobs.map((job) => {
        if (job.status === categoryState.categories) {
          return (
            <div className="applied-job-list flex-col">
              <div
                className="basic-card applied-card
              "
                onClick={() => routeChange(job.id)}
                key={job.id}
              >
                <div className="card-header">
                  <div className="flex-row card-head">
                    <img
                      alt=".."
                      src={job.companyLogo}
                      className="avatar-box avatar-mid"
                    />
                    <div className="flex-col">
                      <h3 className="card-title h3-text">{job.companyName}</h3>
                      <span className="card-subtext ">{job.jobName}</span>
                      <span className="app-status card-subtext">
                        {job.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
}

export default AppliedJobs;

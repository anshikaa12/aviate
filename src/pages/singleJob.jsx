import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/sidebar";
import { useParams } from "react-router-dom";
import { useJobs } from "../context/appliedJobsContext";

function SingleJob() {
  const { jobid } = useParams();
  const { jobsState } = useJobs();
  const currentJob = jobsState.jobs.find((item) => item.id === jobid);

  return (
    <div>
      <Nav />
      <div className="main-sec flex-row">
        <Sidebar />
        <div className="single-job-box">
          <div className="job-header flex-row">
            <img
              src={currentJob.companyLogo}
              className="avatar-box avatar-mid"
              alt=".."
            />
            <div className="flex-col">
              <h1 className="h1-text">{currentJob.companyName}</h1>
              <h4 className="h4-text" style={{ color: "#505467" }}>
                {currentJob.size}
              </h4>
            </div>
          </div>
          <div className="single-job-content flex-col">
            <p className="h4-text">{currentJob.fullDesc}</p>
            <div className="job-details flex-row">
              <div className="cont flex-col">
                <h4 className="h4-text">Location :</h4>
                <p className="h5-text">{currentJob.location}</p>
              </div>
              <div className="cont flex-col">
                <h4 className="h4-text">Mode :</h4>
                <p className="h5-text">{currentJob.mode}</p>
              </div>
              <div className="cont flex-col">
                <h4 className="h4-text">Stipend :</h4>
                <p className="h5-text">{currentJob.pay}</p>
              </div>
            </div>
            <div className="job-status flex-col">
              <div className="flex-row" style={{ gap: "1rem" }}>
                <i className="fas fa-spinner h4-text"></i>
                <p className="h4-text">{currentJob.status}</p>
              </div>
              <h4 className="h4-text">
                Your application status is {currentJob.status}. Please wait for
                furthur communication by the comapny.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleJob;

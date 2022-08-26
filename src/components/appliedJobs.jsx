import React from "react";

function AppliedJobs() {
  return (
    <div className="applied-job-list flex-col">
      <div className="basic-card applied-card">
        <div className="card-header">
          <div className="flex-row card-head">
            <img
              alt=".."
              src="https://res.cloudinary.com/de5it79dw/image/upload/v1661449851/eb7c8808-7c73-405d-a28d-b31a176c55dd-0_zj9jig.png"
              class="avatar-box avatar-mid"
            />
            <div className="flex-col">
              <h3 className="card-title h3-text">CogniSaas</h3>
              <span className="card-subtext ">Frontend Developer</span>
              <span className="app-status card-subtext">Accepted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs;

import React from "react";

function JobsList() {
  return (
    <div className="flex-col-center joblist">
      <div className="basic-card">
        <div className="card-header">
          <div className="header-text">
            <div className="flex-row card-head">
              <img
                alt=".."
                src="https://res.cloudinary.com/de5it79dw/image/upload/v1661449851/eb7c8808-7c73-405d-a28d-b31a176c55dd-0_zj9jig.png"
                class="avatar-box avatar-small"
              />
              <h4 className="card-title">CogniSaas</h4>
            </div>
            <span className="card-subtext bg-color-text">
              Frontend Developer
            </span>
            <p className="card-content bg-color-text">
              enabling customer-centric value delivery enterprise.
            </p>
            <p className="h5-text bg-color-text">$150k</p>
          </div>
        </div>

        <div className="card-footer">
          <button className="card-btn">Save</button>
          <button className="card-btn">Apply</button>
        </div>
      </div>
      <div className="basic-card">
        <div className="card-header">
          <div className="header-text">
            <div className="flex-row card-head">
              <img
                alt=".."
                src="https://res.cloudinary.com/de5it79dw/image/upload/v1661449851/eb7c8808-7c73-405d-a28d-b31a176c55dd-0_zj9jig.png"
                class="avatar-box avatar-small"
              />
              <h4 className="card-title">CogniSaas</h4>
            </div>
            <span className="card-subtext bg-color-text">
              Frontend Developer
            </span>
            <p className="card-content bg-color-text">
              enabling customer-centric value delivery enterprise.
            </p>
            <p className="h5-text bg-color-text">$150k</p>
          </div>
        </div>

        <div className="card-footer">
          <button className="card-btn">Save</button>
          <button className="card-btn">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobsList;

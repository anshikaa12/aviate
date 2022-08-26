import React from "react";

function Recommended() {
  return (
    <div className="recommend-box flex-col">
      <h2 className="h2-text flex-row-center">Recommended Jobs</h2>
      <div className="recommended-job flex-col-center">
        <div className="basic-card ">
          <div className="card-header">
            <div className="header-text">
              <div className="flex-row card-head">
                <img
                  alt=".."
                  src="https://res.cloudinary.com/de5it79dw/image/upload/v1661449851/eb7c8808-7c73-405d-a28d-b31a176c55dd-0_zj9jig.png"
                  class="avatar-box avatar-mid"
                />
                <div className="flex-col">
                  <h4 className="card-title">CogniSaas</h4>
                  <span className="card-subtext bg-color-text">
                    Frontend Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="card-btn">Apply</button>
          </div>
        </div>

        <div className="basic-card ">
          <div className="card-header">
            <div className="header-text">
              <div className="flex-row card-head">
                <img
                  alt=".."
                  src="https://res.cloudinary.com/de5it79dw/image/upload/v1650476979/channels4_profile_1_up66zk.jpg"
                  class="avatar-box avatar-mid"
                />
                <div className="flex-col">
                  <h4 className="card-title">TrakinTech</h4>
                  <span className="card-subtext bg-color-text">
                    Data Analyst
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="card-btn">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;

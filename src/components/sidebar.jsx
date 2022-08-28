import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="vid-sidebar">
      <ul className="sidebar-list flex-col-center">
        <li className="sidebar-item">
          <Link to="/" className="flex-col-center">
            <i className="fas fa-home"></i>
            <p className="foot-p">Home</p>
          </Link>
        </li>
        <li className="sidebar-item flex-col-center">
          <Link to="/dashboard" className="flex-col-center">
            <i className="far fa-compass"></i>
            <p className="foot-p">Applied</p>
          </Link>
        </li>
        <Link to="/" className="flex-col-center">
          <li className="sidebar-item">
            <i className="fas fa-folder-plus"></i>
            <p className="foot-p">Jobs</p>
          </li>
        </Link>
        <Link to="/messages" className="flex-col-center">
          <li className="sidebar-item">
            <i className="fas fa-comment"></i>
            <p className="foot-p">Messages</p>
          </li>
        </Link>
        <Link to="/settings" className="flex-col-center">
          <li className="sidebar-item">
            <i className="fas fa-cog"></i>
            <p className="foot-p">Settings</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;


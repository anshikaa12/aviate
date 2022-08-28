import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="first-nav">
          <h1 className="h1-text">
            A<span className="accent-color-text">viate</span>
          </h1>
        </div>

        <div className="last-nav flex-row-center">
          <i className="fas fa-bell h4-text prime-color-text"></i>
          <input
            type="text"
            className="input-md input-box"
            placeholder="Search"
          />
          <ul className="nav-connect nav-links">
            <Link to="/user" className="nav-connect-a li-link-a">
              <li className="connect-link h6-text flex-col-center">
                <img
                  src="https://res.cloudinary.com/de5it79dw/image/upload/v1657030678/1834021883_uzohjq.jpg"
                  className="avatar-circle avatar-mid"
                  alt="..."
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

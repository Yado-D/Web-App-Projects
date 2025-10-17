import React, { useState } from "react";
import "./header.css";
import Netflix_Logo_PMS from "../../assets/images/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export function HEADER() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className="header_outer_container">
        <div className="header_container">
          <div className="header_left_section">
            <div className="header_logo">
              <button
                className={`hamburger_icon ${isDrawerOpen ? "active" : ""}`}
                onClick={toggleDrawer}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <img src={Netflix_Logo_PMS} alt="NETFLIX" />
            </div>
            <div className="header_left desktop_nav">
              <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by language</li>
              </ul>
            </div>
          </div>

          <div className="header_right_section">
            <div className="header_right">
              <ul>
                <li>
                  <SearchIcon />
                </li>
                <li>
                  <NotificationsIcon />
                </li>
                <li>
                  <AccountBoxIcon />
                </li>
                <li>
                  <ArrowDropDownIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`drawer_overlay ${isDrawerOpen ? "active" : ""}`}
        onClick={closeDrawer}
      ></div>

      <div className={`mobile_drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer_header">
          <h3>Menu</h3>
          <button className="close_btn" onClick={closeDrawer}>
            ×
          </button>
        </div>
        <nav className="mobile_nav">
          <a href="#home" onClick={closeDrawer}>
            Home
          </a>
          <a href="#tv" onClick={closeDrawer}>
            TV Shows
          </a>
          <a href="#movies" onClick={closeDrawer}>
            Movies
          </a>
          <a href="#new" onClick={closeDrawer}>
            New & Popular
          </a>
          <a href="#list" onClick={closeDrawer}>
            My List
          </a>
          <a href="#account" onClick={closeDrawer}>
            Account
          </a>
          <a href="#help" onClick={closeDrawer}>
            Help
          </a>
        </nav>
      </div>
    </>
  );
}

import React from "react";
import "./Main.css";

const Main = (props) => {
  return (
    <div className="main-container">
      <div className="max-width">
        <div className="navbar-container">
          <div className="logo-container">
            <img className="navlogo" src="/images/logo.png" alt="" />
            <h2 className="logo-text">{props.logo}</h2>
          </div>

          <div className="links-container">
            <ul className="nav-list">
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Support</a>
              </li>
              <li>
                <a href="/#">
                  <i class="far fa-user zxc"></i>Log in
                </a>
              </li>
              <a className="btn" href="/#">
                Start Free Trial
              </a>
            </ul>
          </div>
          <div className="hamburger">
            <i class="fas fa-bars"></i>
          </div>
        </div>

        <div className="center-container">
          <div className="max-width">
            <div className="lft-container">
              <h1>
                FOR YOUR <span>MUSIC</span>
              </h1>
              <p>A streaming service for all music fans.</p>
              <a className="btn" href="/#">
                Start Free Trial
              </a>
            </div>
            <div className="rght-container">
              <img className="main-photo" src="/images/main.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

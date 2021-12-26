import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <div className="max-width">
        <div className="footer-links">
          <div className="footer-link">
            <h3>Get Started</h3>
            <ul>
              <li>
                <a href="/#">Download TIDAL</a>
              </li>
              <li>
                <a href="/#">Pricing & Plans</a>
              </li>
              <li>
                <a href="/#">Playlist Import</a>
              </li>
              <li>
                <a href="/#">Supported Devices</a>
              </li>
              <li>
                <a href="/#">Get Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-link">
            <h3>Discover TIDAL</h3>
            <ul>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Pricing & Plans</a>
              </li>
              <li>
                <a href="/#">Culture</a>
              </li>
              <li>
                <a href="/#">Originals</a>
              </li>
              <li>
                <a href="/#">Rising</a>
              </li>
              <li>
                <a href="/#">Sound Quality</a>
              </li>
              <li>
                <a href="/#">TIDAL Connect</a>
              </li>
              <li>
                <a href="/#">Unplugged</a>
              </li>
            </ul>
          </div>

          <div className="footer-link">
            <h3>Account</h3>
            <ul>
              <li>
                <a href="/#">Sign Up</a>
              </li>
              <li>
                <a href="/#">Pricing & Plans</a>
              </li>
              <li>
                <a href="/#">Playlist Import</a>
              </li>
              <li>
                <a href="/#">Supported Devices</a>
              </li>
              <li>
                <a href="/#">Store</a>
              </li>
            </ul>
          </div>

          <div className="footer-link">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/#">What is TIDAL?</a>
              </li>
              <li>
                <a href="/#">Partners</a>
              </li>
              <li>
                <a href="/#">Creers</a>
              </li>
              <li>
                <a href="/#">Press</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="txt-socials">
          <div className="txt-socialscontainer">
            <div className="txtrew">
              TIDAL is the first global music streaming service with high
              fidelity sound, hi-def video quality, along with expertly curated
              playlists and original content — making it a trusted source for
              music and culture.
            </div>
            <div className="socials">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="line"></div>

        <div className="lst-one">
          <div className="lstone-container">
            <div className="asp">
              <img className="navlogo" src="/images/logo.png" alt="" /> © 2021
              Aspiro AB
            </div>
            <div className="lst-links">
              <ul>
                <li>
                  <a href="/#">Privacy policy</a>
                </li>
                <li>
                  <a href="/#">Terms And Conditions</a>
                </li>
                <li>
                  <a href="/#">Accessibility Statement</a>
                </li>
                <li>
                  <a href="/#">Contact</a>
                </li>
                <li>
                  <a href="/#">
                    EN <i class="fas fa-chevron-down down"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

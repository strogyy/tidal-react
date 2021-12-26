import React from "react";
import "./Secondary.css";

const Secondary = () => {
  return (
    <div className="secondary-container">
      <div className="max-width">
        <div className="boxes-container">
          <h1>Let TIDAL soundtrack your life</h1>
          <div className="boxes">
            <div className="box box1">
              <div className="box-texts">
                <h3>HiFi</h3>
                <p>Listen to music the way its meant to sound.</p>
                <div className="h4-container">
                  <h4>
                    <i class="fas fa-check check"></i>HiFi Sound Quality
                  </h4>
                  <h4>
                    <i class="fas fa-check check"></i>80M+ songs and 350K+
                    videos
                  </h4>
                  <h4>
                    <i class="fas fa-check check"></i>Ad-free
                  </h4>
                  <h4>
                    <i class="fas fa-check check"></i>Listen offline with
                    unlimited skips
                  </h4>
                </div>
              </div>
            </div>
            <div className="box box2">
              <div className="box-texts">
                <h3>HiFi Plus</h3>
                <p>Make your listening count. music meant to sound.</p>
                <div className="h4-container">
                  <h4>
                    <i class="fas fa-check check"></i>Innovative Audio Formats
                  </h4>
                  <h4>
                    <i class="fas fa-check check"></i>80M+ songs and 350K+
                    videos
                  </h4>
                  <h4>
                    <i class="fas fa-check check"></i>Ad-free
                  </h4>
                  <h4>
                    <i class="fas fa-check check"></i>Listen offline with
                    unlimited skips
                  </h4>
                  <h4>
                    <i class="fas fa-check check"></i>Direct Artist Payouts
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="btm-bxs">
            <a href="/#">View all plans</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary;

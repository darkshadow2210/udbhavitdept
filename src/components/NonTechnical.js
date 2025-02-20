import React from "react";
import { Link } from "react-router-dom";
import "./Technical.css";

const NonTechnical = () => {
  return (
    <div className="technical-container">
      {/* Animated Text */}
      <h2 className="animated-text">Welcome to Non - Technical Events</h2>

      <div className="card__collection">
        {/* Card One - Tech Torque */}
        <div className="card-wrapper">
          <Link to="/redlight" className="cards cards--one">
            <img
              src="./rlgl.jpg"
              alt="Red Light Green Light"
              className="card-img"
            />
          </Link>
          <span className="card-name">Red Light, Green Light</span>
        </div>

        {/* Card Two - Tech Debate */}
        <div className="card-wrapper">
          <Link to="/whisperchallenge" className="cards cards--two">
            <img
              src="wc.jpg"
              alt="Whisper Challenge"
              className="card-img"
            />
          </Link>
          <span className="card-name">Whisper Challenge</span>
        </div>
      </div>
    </div>
  );
};

export default NonTechnical;

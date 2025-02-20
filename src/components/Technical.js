import React from "react";
import { Link } from "react-router-dom";
import "./Technical.css";

const Technical = () => {
  return (
    <div className="technical-container">
      {/* Animated Text */}
      <h2 className="animated-text">Welcome to Technical Events</h2>

      <div className="card__collection">
        {/* Card One - Tech Torque */}
        <div className="card-wrapper">
          <Link to="/techtorque" className="cards cards--one">
            <img
              src=".\tech.png"
              alt="Tech Torque"
              className="card-img"
            />
          </Link>
          <span className="card-name">Tech Torque</span>
        </div>

        {/* Card Two - Tech Debate */}
        <div className="card-wrapper">
          <Link to="/techdebate" className="cards cards--two">
            <img
              src=".\debate.jpg"
              alt="Tech Debate"
              className="card-img"
            />
          </Link>
          <span className="card-name">Tech Debate</span>
        </div>

        {/* Card Three - Lock N Key */}
        <div className="card-wrapper">
          <Link to="/locknkey" className="cards cards--three">
            <img
              src=".\lock.jpg"
              alt="Lock N Key"
              className="card-img"
            />
          </Link>
          <span className="card-name">Lock N Key</span>
        </div>

        {/* Card Four - Canvas */}
        <div className="card-wrapper">
          <Link to="/canvas" className="cards cards--four">
            <img
              src=".\canvas.jpg"
              alt="Canvas"
              className="card-img"
            />
          </Link>
          <span className="card-name">Canvas</span>
        </div>
      </div>
    </div>
  );
};

export default Technical;

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
              src="https://lh4.googleusercontent.com/iIqGc5X3UgyDfgHm-CTV0xS3WwVeK3XzU3lxZTq0MBQWUjRxjOb5WDgSnmgjuFZaZZIOuBdnD_WI1lkKIZ03zWhQW7uNgmL81CllmpIRwkUlJjcqxjXP2BgfCK6WJDohAA=w1280"
              alt="Tech Torque"
              className="card-img"
            />
          </Link>
          <span className="card-name">Red Light, Green Light</span>
        </div>

        {/* Card Two - Tech Debate */}
        <div className="card-wrapper">
          <Link to="/whisperchallenge" className="cards cards--two">
            <img
              src="https://lh3.googleusercontent.com/SpUN4wMeTLgwvYmJhKn2MBvMr8-oAahQuEi0RjXELvgTS21Rp91zN48tAiDnVcKN3RWGT-Kl1OPuPvqVSm4Rc8RMUpicK6A8OAoTdICT14yAcvodoSCXQBK9FRqfMkzTxA=w1280"
              alt="Tech Debate"
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

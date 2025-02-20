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
              src="https://lh4.googleusercontent.com/cHqk6h8uRBQxHwMVXnujSoIIre71giYM053W2mIkyWTbj67Hvolsu37al-C7vikxYtERIxDZmdah43txcig483w=w1280"
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
              src="https://lh4.googleusercontent.com/nX0-eXY1qA7oqb4zjOKkv9DhABxa0k12M7EbGTtT6fObx3UkZ0FMYKDjDpVlfzXhQ0tjCsSCrrA0Gb87civCMarzJKCO7VoLNgTdMkxBg1F4N3AjYez4iWrA4ABZZBBJXg=w1280"
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
              src="https://lh3.googleusercontent.com/qHquZc7JT-7MyX-GQiY84zN-E-fUhI6hA7pbjyU0sJRt3sDxv7lx-TFF1KFe0TEKMRmv2VFsQCom3EuxlEVitM4=w1280"
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
              src="https://lh3.googleusercontent.com/VvK13-H8ot8617ec9Ur-2UQwR9xCRY7e5LXgJRVzAkGgoUkva-g_47OBINE4hGpqV9qrbI9awckt_LcOpPUJ9p0=w1280"
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

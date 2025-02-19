import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import CSS for Home

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to UDHBHAV FEST 2K25 - IT DEPT.</h1>
      <div className="home-image-container">
        <img
          src="path_to_your_image.jpg" // Replace with your image path
          alt="Department"
          className="home-image"
        />
      </div>
      <p className="home-description">
        The Information Technology department offers a range of technical and
        non-technical events during the college fest.
      </p>
      <div className="home-buttons">
        <button className="home-btn">
          <Link to="/technical" className="home-link">Technical Events</Link>
        </button>
        <button className="home-btn">
          <Link to="/nontechnical" className="home-link">Non-Technical Events</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;

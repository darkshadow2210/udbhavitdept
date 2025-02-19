import React from "react";
import { Link } from "react-router-dom";
import './Technical.css'; // Import CSS for Technical page

function Technical() {
  return (
    <div className="technical">
      <h1 className="technical-title">Technical Events</h1>
      <p className="technical-description">
        Explore and participate in a variety of technical events that challenge your skills and creativity.
      </p>

      <div className="technical-buttons">
        <Link to="/techtorque" className="technical-btn">Tech Torque</Link>
        <Link to="/techdebate" className="technical-btn">Tech Debate</Link>
        <Link to="/locknkey" className="technical-btn">Lock N Key</Link>
        <Link to="/canvas" className="technical-btn">Canvas</Link>
      </div>
    </div>
  );
}

export default Technical;

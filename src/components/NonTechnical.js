import React from "react";
import { Link } from "react-router-dom";
import './Technical.css'; // Import CSS for Technical page

function Technical() {
  return (
    <div className="technical">
      <h1 className="technical-title">Technical Events</h1>
      <p className="technical-description">
        Explore and participate in a variety of non-technical events that challenge your skills and creativity.
      </p>

      <div className="technical-buttons">
        <Link to="/redlight" className="technical-btn">Red Light, Green Light</Link>
        <Link to="/whisperchallenge" className="technical-btn">Whisper Challenge</Link>

      </div>
    </div>
  );
}

export default Technical;

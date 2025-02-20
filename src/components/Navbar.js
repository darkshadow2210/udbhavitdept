import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import CSS for Navbar

function Navbar() {
  // State to toggle the navbar links visibility
  const [isMobile, setIsMobile] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add logo */}
        <img src="/Navbarlogo.jpg" alt="Logo" className="navbar-logo" />
        
        {/* Add a link to the Home page */}
        <Link to="/" className="navbar-title">
          <h1>Udhbhav 2K25 IT Department</h1>
        </Link>
      </div>
      
      <div className={`navbar-right ${isMobile ? "active" : ""}`}>
        <ul className={`navbar-list ${isMobile ? "active" : ""}`}>
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/technical" className="navbar-link">Technical</Link></li>
          <li><Link to="/nontechnical" className="navbar-link">Non-Technical</Link></li>
        </ul>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMobile ? "active" : ""}`}></div>
        <div className={`bar ${isMobile ? "active" : ""}`}></div>
        <div className={`bar ${isMobile ? "active" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;

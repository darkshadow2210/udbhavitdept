import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import CSS for Home

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to UDHBHAV FEST 2K25 - IT DEPT.</h1>
      
      {/* New Heading Section */}
      <h2 className="discount-heading">
        Register in IT Department events and get 10% off in these stalls
      </h2>
      
      <div className="cards-container">
        <div className="card">
          <img src="\Gola.jpg" alt="Stall 1" className="card-image" />
          <h3 className="card-title">Ice Gola</h3>
          <p className="card-description">
            Enjoy delicious gola at a 10% discount when you register for IT events. Venue: In front of E Block.
          </p>
        </div>
        <div className="card">
          <img src="\FryFiesta.jpg" alt="Stall 1" className="card-image" />
          <h3 className="card-title">Fry Fiesta</h3>
          <p className="card-description">
          Come visit FRY FIESTA for the crispiest, tastiest, fries in campus! Venue: In front of E Block.
          </p>
        </div>
        <div className="card">
          <img src="\VR.jpg" alt="Stall 2" className="card-image" />
          <h3 className="card-title"> VR Gaming Stall</h3>
          <p className="card-description">
            Get  10% discount in VR Games by participating in IT events. Venue: To be announced.
          </p>
        </div>
      </div>
      <div className="home-image-container">
        <img
          src="\Poster.jpg" // Replace with your image path
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

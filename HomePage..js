import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Campsite Booking</h1>
      <div className="search-section">
        <input type="text" placeholder="Where you're staying?" />
        <input type="date" />
        <input type="date" />
        <input type="number" placeholder="Number of adults" />
        <input type="number" placeholder="Number of children" />
        <input type="number" placeholder="Number of rooms" />
        <button>Search</button>
      </div>
      <div className="offers">
        <h2>Special Offers</h2>
        <p>Explore great deals and discounts for your next stay.</p>
      </div>
      <div className="explore">
        <h2>Explore Locations</h2>
        <div className="location-cards">
          <div className="card">Canada</div>
          <div className="card">USA</div>
          <div className="card">India</div>
          <div className="card">Mexico</div>
        </div>
      </div>
      <div className="auth-links">
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;
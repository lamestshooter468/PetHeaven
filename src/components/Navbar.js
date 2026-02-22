import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Pet Adoption Center</h2>
      </div>
      
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/dogs">Dogs</NavLink></li>
        <li><NavLink to="/cats">Cats</NavLink></li>
        <li><NavLink to="/adopt">Adopt</NavLink></li>
        <li><NavLink to="/release">Release</NavLink></li>

        <li className="dropdown">
            <span className="dropdown-trigger">More ▾</span>
            <ul className="dropdown-menu">
                <li><NavLink to="/mission">Mission</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/petcare">Pet Care</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
            </ul>
        </li>

        <li className="auth-section">
          {loggedInUser ? (
            <div className="user-nav">
              <span className="user-name">👤 {loggedInUser.split('@')[0]}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <NavLink to="/login" className="login-nav-btn">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created! Redirecting to login...");
    navigate("/login");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="login-header">
          <h2>Create Account</h2>
          <p>Join our community of pet lovers</p>
        </div>

        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe"
            onChange={(e) => setUserData({...userData, name: e.target.value})} 
            required
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com"
            onChange={(e) => setUserData({...userData, email: e.target.value})} 
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="At least 8 characters"
            onChange={(e) => setUserData({...userData, password: e.target.value})} 
            required
          />
        </div>

        <button type="submit" className="login-btn">Sign Up</button>

        <p className="login-footer">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
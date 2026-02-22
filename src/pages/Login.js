import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("user", user.email);
    
    navigate("/");
    window.location.reload(); 
  };
  
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="login-header">
          <h2>Member Login</h2>
          <p>Enter your details to access your account</p>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })} 
            required 
          />
        </div>
        <button type="submit" className="login-btn">Login</button>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
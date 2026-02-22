import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import the hook

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // 2. Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save the user to localStorage
    localStorage.setItem("user", user.email);
    
    // Redirect home
    navigate("/");
    // Refresh the page so the Navbar sees the change
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
      </form>
    </div>
  );
}

export default Login;
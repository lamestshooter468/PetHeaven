import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReleaseForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    petType: "",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pet release request submitted! We will review your case shortly.");
    navigate("/");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="login-header">
          <h2>Release a Pet</h2>
          <p>We're here to help find a safe home for your pet.</p>
        </div>

        <div className="input-group">
          <label>Your Name</label>
          <input
            name="ownerName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Pet's Name</label>
          <input
            name="petName"
            placeholder="Pet's Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Pet Type</label>
          <select name="petType" onChange={handleChange} required>
            <option value="">Select Type</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Other</option>
          </select>
        </div>

        <div className="input-group">
          <label>Reason for Release</label>
          <textarea
            name="reason"
            placeholder="Please share why you need to rehome your pet..."
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">Submit Request</button>
      </form>
    </div>
  );
}

export default ReleaseForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdoptForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", petName: "", address: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application received! We will contact you soon.");
    navigate("/");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="login-header">
          <h2>Adoption Application</h2>
          <p>Tell us a bit about yourself</p>
        </div>

        <div className="input-group">
          <label>Your Full Name</label>
          <input 
            name="name" 
            value={formData.name} 
            placeholder="Jane Doe" 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Which pet are you interested in?</label>
          <input 
            name="petName" 
            value={formData.petName} 
            placeholder="Pet's Name" 
            onChange={(e) => setFormData({...formData, petName: e.target.value})} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Home Address</label>
          <textarea 
            name="address" 
            value={formData.address} 
            placeholder="123 Bark Lane, Paw City" 
            onChange={(e) => setFormData({...formData, address: e.target.value})} 
            style={{ padding: '12px', borderRadius: '8px', border: '1.5px solid #ddd', fontFamily: 'inherit' }}
            required 
          />
        </div>

        <button type="submit" className="login-btn">Submit Application</button>
      </form>
    </div>
  );
}

export default AdoptForm;
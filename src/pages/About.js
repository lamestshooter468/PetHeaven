import React from "react";

function About() {
  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2E7D32' }}>About Our Center</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>Serving the community since 2020</p>
      </div>

      <div className="card" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <h3>Who We Are</h3>
        <p>
          The Pet Adoption Center is a non-profit organization dedicated to rescuing, 
          rehabilitating, and rehoming pets in need. Our facility is staffed by 
          passionate animal lovers and expert veterinarians.
        </p>
        
        <h3>Our Facility</h3>
        <p>
          We pride ourselves on maintaining a clean, safe, and social environment 
          for our animals. Each pet receives individual attention, high-quality 
          nutrition, and the medical care they deserve.
        </p>
      </div>
    </div>
  );
}

export default About;
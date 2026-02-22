import React from "react";

function Contact() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you.</p>
        </div>
        
        <div className="contact-info" style={{ marginBottom: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <strong>📍 Location:</strong>
            <p style={{ margin: '5px 0', color: '#666' }}>123 Rescue Way, Paw City</p>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong>📞 Phone:</strong>
            <p style={{ margin: '5px 0', color: '#666' }}>(555) 123-4567</p>
          </div>
          <div>
            <strong>✉️ Email:</strong>
            <p style={{ margin: '5px 0', color: '#666' }}>hello@petadopt.com</p>
          </div>
        </div>

        <button className="login-btn" onClick={() => window.location.href = 'mailto:lamestshooter@gmail.com'}>
          Email Us Now
        </button>
      </div>
    </div>
  );
}

export default Contact;
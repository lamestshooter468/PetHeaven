import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div className="container" style={{ textAlign: 'center', padding: '100px 20px' }} initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
  <h1 style={{ fontSize: '3rem', color: '#2E7D32' }}>Find Your Forever Friend 🐾</h1>
  <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
    Over 100 pets are waiting for a home. Start your journey today.
  </p>
  <div className="home-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
  <Link to="/dogs">
    <button className="home-btn dog-btn">
      Browse Dogs
    </button>
  </Link>
  
  <Link to="/cats">
    <button className="home-btn cat-btn">
      Browse Cats
    </button>
  </Link>
</div>
</motion.div>
  );
}

export default Home;
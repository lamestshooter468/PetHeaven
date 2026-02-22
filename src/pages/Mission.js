import React from "react";
import { motion } from "framer-motion";

function Mission() {
  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginTop: '50px' }}
      >
        <h1 style={{ color: '#2E7D32', fontSize: '2.5rem' }}>Our Mission 🐾</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
          <p>
            At the Pet Adoption Center, our mission is to provide every animal with a 
            loving home and every family with a lifelong companion. We believe that 
            every pet deserves a second chance at happiness.
          </p>
          <p>
            Through our rigorous screening process and dedicated volunteer network, 
            we ensure that our pets are matched with the perfect environment to thrive.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Mission;
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PetCard({ pet }) {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age} years</p>
      <button onClick={() => navigate("/adopt")}>
        Adopt {pet.name}
      </button>
    </motion.div>
  );
}

export default PetCard;
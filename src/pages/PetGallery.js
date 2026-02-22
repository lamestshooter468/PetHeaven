import React from "react";
import PetCard from "../components/PetCard";

function PetGallery({ title, petData }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="grid">
        {petData && petData.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetGallery;
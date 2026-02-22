import React from "react";

function PetCare() {
  const tips = [
    { title: "Nutrition", desc: "Provide high-quality food appropriate for their age." },
    { title: "Wellness", desc: "Schedule regular vet check-ups and vaccinations." },
    { title: "Exercise", desc: "Ensure daily play time and walks for mental health." },
    { title: "Grooming", desc: "Brush regularly to keep their coat healthy and shiny." }
  ];

  return (
    <div className="container">
      <div className="login-header" style={{ textAlign: 'center' }}>
        <h1>Pet Care Guide</h1>
        <p>Essential tips for your new best friend</p>
      </div>

      <div className="grid" style={{ marginBottom: '50px' }}>
        {tips.map((tip, index) => (
          <div key={index} className="card" style={{ padding: '20px' }}>
            <h3 style={{ color: '#4CAF50' }}>{tip.title}</h3>
            <p>{tip.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2>Video Tutorial: Puppy Basics</h2>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Pet Care Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default PetCare;
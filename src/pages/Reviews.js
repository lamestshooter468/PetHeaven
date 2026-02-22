import React from "react";
import reviews from "../data/reviews";

function Reviews() {
  return (
    <div className="container">
      <div className="login-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Member Reviews</h1>
        <p>Real stories from our happy pet parents</p>
      </div>

      <div className="grid">
        {reviews.map((review) => (
          <div key={review.id} className="card" style={{ padding: '20px' }}>
            <div style={{ color: '#FFC107', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ fontStyle: 'italic', color: '#444' }}>"{review.comment}"</p>
            <h4 style={{ margin: '10px 0 0', color: '#2E7D32' }}>— {review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
// Card.js
import React from 'react';

function Card({ clubName, workshopName, onClick }) {
  return (
    <div onClick={onClick} style={styles.card}>
      <h2>{clubName}</h2>
      <p>{workshopName}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: '20px',
    margin: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default Card;

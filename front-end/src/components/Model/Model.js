// Modal.js
import React from 'react';

function Modal({ isVisible, onClose, workshop }) {
  if (!isVisible) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{workshop.clubName}</h2>
        <p>Workshop: {workshop.workshopName}</p>
        <p>Description: {workshop.description}</p>
        <p>Date: {workshop.date}</p>
        <p>Location: {workshop.location}</p>
        <p>Price: {workshop.price}</p>
        <button onClick={onClose}>Close</button>
        <button>Register</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxWidth: '600px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default Modal;

import React from 'react';
import '../styles/orderSuccess.css';

const FeedbackSuccess = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2>Feedback Submitted!</h2>
        <p>Thank you for sharing your thoughts with Sandwich Geeks!</p>
        <div className="popup-buttons">
          <button className="continue-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSuccess; 
import React from 'react';
import '../styles/orderSuccess.css';

const NewsletterSuccess = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <div className="success-icon">🎉</div>
      <h2 style={{ fontFamily: 'Sedgwick Ave', fontSize: 32, textAlign: 'center' }}>Subscribed!</h2>
      <p style={{ textAlign: 'center', marginLeft: '130px', marginTop: '20px', marginBottom: '-20px', fontSize: '1.1rem' }}>
        Thank you for subscribing to our newsletter.<br />
        You'll now receive the latest offers and updates straight to your inbox!
      </p>
      <div className="popup-buttons">
        <button className="continue-btn" onClick={onClose}>
        Close
        </button>
      </div>
    </div>
  </div>
);

export default NewsletterSuccess; 
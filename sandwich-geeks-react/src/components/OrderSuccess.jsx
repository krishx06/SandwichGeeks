import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/orderSuccess.css';

const OrderSuccess = ({ onClose }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onClose();
    navigate('/menu');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your order. Your delicious food will be on its way soon!</p>
        <div className="popup-buttons">
          <button className="continue-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="track-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 
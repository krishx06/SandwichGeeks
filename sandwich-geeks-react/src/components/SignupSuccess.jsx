import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/orderSuccess.css';

const SignupSuccess = ({ onClose }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    onClose();
    navigate('/menu');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2>Signup Successful!</h2>
        <p style={{marginLeft: "130px"}}>Welcome to Sandwich Geeks! Start your delicious journey with us.</p>
        <div className="popup-buttons">
          <button className="continue-btn" onClick={handleOrderNow}>
            Order Now
          </button>
          <button className="track-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess; 
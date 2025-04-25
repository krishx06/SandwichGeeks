import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/orderSuccess.css';

const SigninSuccess = ({ onClose }) => {
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
        <h2>Sign In Successful!</h2>
        <p style={{maxWidth: "290px", marginLeft: "110px"}}>Welcome back to Sandwich Geeks! Ready to satisfy your cravings again?</p>
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

export default SigninSuccess; 
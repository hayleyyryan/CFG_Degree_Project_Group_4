import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for LandingPage

const LandingPage = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/welcome');
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1>Do you want to play a game?</h1>
        <button className="game-button" onClick={handleYesClick}>
          <span className="flashing-symbol">{`>`}</span> Yes
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

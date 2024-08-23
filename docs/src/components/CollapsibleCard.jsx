import React, { useState } from 'react';
import './CollapsibleCard.css'; // Import the styles for the collapsible card

const CollapsibleCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-card">
      <div className="collapsible-card-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>+</span>
      </div>
      <div className={`collapsible-card-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CollapsibleCard;
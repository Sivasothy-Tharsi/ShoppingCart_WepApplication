import React from 'react';
import "./notLoggedInMessage.css"

function NotLoggedInMessage({message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default NotLoggedInMessage;

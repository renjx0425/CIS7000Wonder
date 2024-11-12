import React from 'react';
import './ReflectionModal.css';

function ReflectionModal({ prompts, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {prompts.map((prompt, index) => (
          <div key={index} className="reflection-prompt">
            <p>{prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReflectionModal;

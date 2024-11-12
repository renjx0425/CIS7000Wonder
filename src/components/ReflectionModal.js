import React from 'react';

const ReflectionModal = ({ prompts, onClose }) => {
  return (
    <div className="reflection-modal">
      <h2>Reflection</h2>
      {prompts.map((prompt, index) => (
        <p key={index}>{prompt}</p>
      ))}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ReflectionModal;

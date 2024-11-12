import React from 'react';

function PerspectiveContent({ content }) {
  return (
    <div className="perspective-content" style={{ color: content.color }}>
      <h2>{content.character}</h2>
      <p>{content.text}</p>
    </div>
  );
}

export default PerspectiveContent;

import React, { useState } from 'react';
import PerspectiveContent from './PerspectiveContent';
import './PerspectiveSwitcher.css';

function PerspectiveSwitcher({ perspectives }) {
  const [activePerspective, setActivePerspective] = useState(perspectives[0]);

  return (
    <div className="perspective-switcher">
      <div className="character-tabs">
        {perspectives.map((perspective, index) => (
          <button
            key={index}
            style={{ backgroundColor: perspective.color }}
            onClick={() => setActivePerspective(perspective)}
          >
            <img src={perspective.icon} alt={`${perspective.character} icon`} />
          </button>
        ))}
      </div>
      <PerspectiveContent content={activePerspective} />
    </div>
  );
}

export default PerspectiveSwitcher;

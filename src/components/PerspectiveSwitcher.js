import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/PerspectiveSwitcher.css';
import auggieIcon from '../assets/icons/auggie_icon.png';
import jackIcon from '../assets/icons/jack_icon.png';


const PerspectiveSwitcher = ({ perspectives }) => {
  const [currentPerspective, setCurrentPerspective] = useState(perspectives[0]);

  return (
    <div>
      <div className="perspective-tabs">
        {perspectives.map((perspective, index) => (
          <button
            key={index}
            style={{ backgroundColor: perspective.color }}
            onClick={() => setCurrentPerspective(perspective)}
          >
            <img
              src={perspective.character === "Auggie" ? auggieIcon : jackIcon}
              alt={`${perspective.character} icon`}
            />
          </button>
        ))}
      </div>
      <CSSTransition key={currentPerspective.character} timeout={300} classNames="fade">
        <div className="perspective-content">
          <h2>{currentPerspective.character}</h2>
          <p>{currentPerspective.text}</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default PerspectiveSwitcher;

import React from 'react';

const Timeline = ({ scenes, onSceneSelect }) => {
  return (
    <div className="timeline">
      {scenes.map((scene, index) => (
        <button key={index} onClick={() => onSceneSelect(scene)}>
          <img src={scene.perspectives[0].icon} alt={scene.title} />
        </button>
      ))}
    </div>
  );
};

export default Timeline;

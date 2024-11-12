import React from 'react';

function Timeline({ scenes, currentSceneIndex, onSceneSelect }) {
  return (
    <div className="timeline">
      {scenes.map((scene, index) => (
        <button
          key={scene.scene_id}
          className={index === currentSceneIndex ? 'active' : ''}
          onClick={() => onSceneSelect(index)}
        >
          <img src={scene.icon} alt={scene.title} />
        </button>
      ))}
    </div>
  );
}

export default Timeline;

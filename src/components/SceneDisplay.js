import React from 'react';
import PerspectiveSwitcher from './PerspectiveSwitcher';

const SceneDisplay = ({ scene }) => {
  return (
    <div>
      <h1>{scene.title}</h1>
      <PerspectiveSwitcher perspectives={scene.perspectives} />
    </div>
  );
};

export default SceneDisplay;

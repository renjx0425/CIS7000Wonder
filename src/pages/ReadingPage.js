import React, { useState } from 'react';
import scenes from '../data/scenes.json';
import PerspectiveSwitcher from '../components/PerspectiveSwitcher';
import Timeline from '../components/Timeline';

function ReadingPage() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const currentScene = scenes[currentSceneIndex];

  return (
    <div className="reading-page">
      <Timeline
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
        onSceneSelect={setCurrentSceneIndex}
      />
      <PerspectiveSwitcher perspectives={currentScene.perspectives} />
    </div>
  );
}

export default ReadingPage;

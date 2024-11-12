import React, { useState } from 'react';
import scenesData from './data/scenes.json';
import SceneDisplay from './components/SceneDisplay';
import Timeline from './components/Timeline';
import ReflectionModal from './components/ReflectionModal';

function App() {
  const [currentScene, setCurrentScene] = useState(scenesData.scenes[0]);
  const [showReflection, setShowReflection] = useState(false);

  const handleSceneSelect = (scene) => {
    setCurrentScene(scene);
  };

  return (
    <div className="App">
      <Timeline scenes={scenesData.scenes} onSceneSelect={handleSceneSelect} />
      <SceneDisplay scene={currentScene} />
      {showReflection && (
        <ReflectionModal prompts={currentScene.reflection_prompts} onClose={() => setShowReflection(false)} />
      )}
    </div>
  );
}

export default App;

import React from 'react';

const CharacterToggle = ({ characters, onCharacterSelect }) => {
  return (
    <div className="character-toggle">
      {characters.map((character, index) => (
        <button
          key={index}
          style={{ backgroundColor: character.color }}
          onClick={() => onCharacterSelect(character)}
        >
          <img src={character.icon} alt={`${character.name} icon`} />
        </button>
      ))}
    </div>
  );
};

export default CharacterToggle;

import auggieIcon from '../assets/icons/auggie_icon.png';
import jackIcon from '../assets/icons/jack_icon.png';

const CharacterToggle = ({ characters, onCharacterSelect }) => {
  return (
    <div className="character-toggle">
      {characters.map((character, index) => (
        <button
          key={index}
          style={{ backgroundColor: character.color }}
          onClick={() => onCharacterSelect(character)}
        >
          <img
            src={character.name === "Auggie" ? auggieIcon : jackIcon}
            alt={`${character.name} icon`}
          />
        </button>
      ))}
    </div>
  );
};

export default CharacterToggle;

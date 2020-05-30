import PropTypes from "prop-types";
import React, { useContext } from "react";
import CharMapContext from "../../context/CharMapContext";
import { CharacterInfo } from "../../types/CharacterInfo";
import "./CharMapSelector.css";

export interface CharMapSelectorProps {
  onSelect(characterInfo: CharacterInfo): void;
}

const CharMapSelector: React.FC<CharMapSelectorProps> = ({ onSelect }) => {
  const { characterData, selectedCategory } = useContext(CharMapContext);
  return (
    <div className="charMap--selector">
      {characterData[selectedCategory].map((characterInfo) => (
        <button
          key={characterInfo.char}
          className="charMap--selector-button"
          onClick={() => onSelect(characterInfo)}
        >
          {characterInfo.char}
        </button>
      ))}
    </div>
  );
};

CharMapSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CharMapSelector;

import React, { useContext } from "react";
import CharMapContext from "../../context/CharMapContext";
import { CharacterInfo } from "../../types/CharacterInfo";
import "./CharMapSelector.css";

export interface CharMapSelectorProps {
  onSelect(characterInfo: CharacterInfo): void;
}

const CharMapSelector: React.FC<CharMapSelectorProps> = ({ onSelect }) => {
    debugger;
   const { characterData, selectedCategory } = useContext(CharMapContext);
  return (
    <div className="charMap--selector">
      {characterData[selectedCategory].map((characterInfo) => (
        <button className="charMap--selector-button" onClick={() => onSelect(characterInfo)}>
          {characterInfo.char}
        </button>
      ))}
    </div>
  );
};

export default CharMapSelector;

import React, { useContext, useMemo, useState } from "react";
import CharMapContext, {
  CharMapContextContents,
} from "../../context/CharMapContext";
import { CharMapData } from "../../types/CharacterInfo";

export interface CharMapContextProviderProps {
  characterData?: CharMapData;
}

const CharMapContextProvider: React.FC<CharMapContextProviderProps> = ({
  characterData,
  children,
}) => {
  const parentContext = useContext(CharMapContext);

  const [selectedCategory, setSelectedCategory] = useState(
    parentContext.selectedCategory
  );

  const contextContents: CharMapContextContents = useMemo(
    () => ({
      characterData: characterData ?? parentContext.characterData,
      selectedCategory,
      setSelectedCategory,
    }),
    [parentContext, characterData, selectedCategory, setSelectedCategory]
  );

  return (
    <CharMapContext.Provider value={contextContents}>
      {children}
    </CharMapContext.Provider>
  );
};

export default CharMapContextProvider;

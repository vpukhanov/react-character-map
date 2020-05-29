import React, { useCallback, useContext, useMemo, useState } from "react";
import CharMapContext, {
  CharMapContextContents,
} from "../../context/CharMapContext";
import { CharMapData } from "../../types/CharacterInfo";

export interface CharMapContextProviderProps {
  categoryNames?: Record<string, string>;
  characterData?: CharMapData;
}

const CharMapContextProvider: React.FC<CharMapContextProviderProps> = ({
  categoryNames,
  characterData,
  children,
}) => {
  const parentContext = useContext(CharMapContext);

  const [selectedCategory, setSelectedCategory] = useState(
    parentContext.selectedCategory
  );
  const getDisplayCategoryName = useCallback(
    (category: string) =>
      (categoryNames && categoryNames[category]) ||
      parentContext.getDisplayCategoryName(category),
    [categoryNames]
  );

  const contextContents: CharMapContextContents = useMemo(
    () => ({
      characterData: characterData ?? parentContext.characterData,
      selectedCategory,
      setSelectedCategory,
      getDisplayCategoryName,
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

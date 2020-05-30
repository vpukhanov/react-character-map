import PropTypes from "prop-types";
import React, { useCallback, useContext, useMemo, useState } from "react";
import CharMapContext, {
  CharMapContextContents,
} from "../../context/CharMapContext";
import { CharMapData, CharMapDataShape } from "../../types/CharacterInfo";

export interface CharMapContextProviderProps {
  categoryNames?: Record<string, string>;
  characterData?: CharMapData;
  defaultSelectedCategory?: string;
}

const CharMapContextProvider: React.FC<CharMapContextProviderProps> = ({
  categoryNames,
  characterData,
  children,
  defaultSelectedCategory,
}) => {
  const parentContext = useContext(CharMapContext);

  const [selectedCategory, setSelectedCategory] = useState(
    defaultSelectedCategory || parentContext.selectedCategory
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

CharMapContextProvider.propTypes = {
  categoryNames: PropTypes.objectOf(PropTypes.string.isRequired),
  characterData: CharMapDataShape,
  defaultSelectedCategory: PropTypes.string,
};

export default CharMapContextProvider;

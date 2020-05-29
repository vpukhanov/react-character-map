import React, { useContext, useState, useMemo } from "react";
import { CharMapData } from "../../types/CharacterInfo";
import CharMapContext, { CharMapContextContents } from "../../context/CharMapContext";

export interface CharMapContextProviderProps {
    characterData?: CharMapData;
}

const CharMapContextProvider: React.FC<CharMapContextProviderProps> = ({ characterData, children }) => {
    const parentContext = useContext(CharMapContext);

    const [selectedCategory, setSelectedCategory] = useState(parentContext.selectedCategory);

    const contextContents: CharMapContextContents = useMemo(() => ({
        characterData: characterData ?? parentContext.characterData,
        selectedCategory,
        setSelectedCategory
    }), [parentContext, characterData, selectedCategory, setSelectedCategory]);

    return (
        <CharMapContext.Provider value={contextContents}>
            {children}
        </CharMapContext.Provider>
    )
};

export default CharMapContextProvider;

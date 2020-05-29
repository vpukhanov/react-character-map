import React from "react";
import CharMapContextProvider, { CharMapContextProviderProps } from "../CharMapContextProvider/CharMapContextProvider";
import CharMapCategoriesList from "../CharMapCategoriesList/CharMapCategoriesList";
import CharMapSelector, { CharMapSelectorProps } from "../CharMapSelector/CharMapSelector";

export type CharMapProps = CharMapContextProviderProps & CharMapSelectorProps;

const CharMap: React.FC<CharMapProps> = (props) => <CharMapContextProvider characterData={props.characterData}>
    <CharMapCategoriesList />
    <CharMapSelector onSelect={props.onSelect} />
</CharMapContextProvider>;

export default CharMap;

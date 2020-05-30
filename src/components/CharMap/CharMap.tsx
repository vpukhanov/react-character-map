import React from "react";
import CharMapCategoriesList from "../CharMapCategoriesList/CharMapCategoriesList";
import CharMapContextProvider, {
  CharMapContextProviderProps,
} from "../CharMapContextProvider/CharMapContextProvider";
import CharMapSelector, {
  CharMapSelectorProps,
} from "../CharMapSelector/CharMapSelector";

export type CharMapProps = CharMapContextProviderProps & CharMapSelectorProps;

const CharMap: React.FC<CharMapProps> = (props) => (
  <CharMapContextProvider
    characterData={props.characterData}
    categoryNames={props.categoryNames}
    defaultSelectedCategory={props.defaultSelectedCategory}
  >
    <CharMapCategoriesList />
    <CharMapSelector onSelect={props.onSelect} />
  </CharMapContextProvider>
);

CharMap.propTypes = {
  ...CharMapContextProvider.propTypes,
  ...CharMapSelector.propTypes,
};

export default CharMap;

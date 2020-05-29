import { createContext } from "react";
import defaultCharacterData from "../data/chars.json";
import { CharMapData } from "../types/CharacterInfo";

export interface CharMapContextContents {
  characterData: CharMapData;
  selectedCategory: string;

  setSelectedCategory(category: string): void;
}

const CharMapContext = createContext<CharMapContextContents>({
  characterData: defaultCharacterData,
  selectedCategory: "Misc",

  setSelectedCategory() {
    throw Error(
      "CharMapContext does not contain an implementation of setSelectedCategory. Make sure to wrap CharMap components in a CharMapContextProvider."
    );
  },
});

export default CharMapContext;

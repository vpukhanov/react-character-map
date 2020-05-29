import { createContext } from "react";
import { CharMapData } from "../types/CharacterInfo";

import defaultCharacterData from "../data/chars.json";

export interface CharMapContextContents {
  characterData: CharMapData;
  selectedCategory: string;
}

const CharMapContext = createContext<CharMapContextContents>({
  characterData: defaultCharacterData,
  selectedCategory: "Misc",
});

export default CharMapContext;

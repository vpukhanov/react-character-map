import React from "react";
import CharMapSelector from "./CharMapSelector";
import CharMapContextProvider from "../CharMapContextProvider/CharMapContextProvider";
import { CharacterInfo, CharMapData } from "../../types/CharacterInfo";

export default {
  component: CharMapSelector,
  title: "CharMapSelector",
  decorators: [
    (story: Function) => <div style={{ maxWidth: 600 }}>{story()}</div>,
  ],
  excludeStories: /Data$/,
};

const toCharacterInfo = (str: string): CharacterInfo[] =>
  str.split("").map((char) => ({ char }));

export const customCharacterData: CharMapData = {
  English: toCharacterInfo("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  Russian: toCharacterInfo("АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"),
};

export const Default = () => <CharMapSelector onSelect={() => {}} />;

export const EnglishAlphabet = () => (
  <CharMapContextProvider
    characterData={customCharacterData}
    defaultSelectedCategory="English"
  >
    {Default()}
  </CharMapContextProvider>
);

export const RussianAlphabet = () => (
  <CharMapContextProvider
    characterData={customCharacterData}
    defaultSelectedCategory="Russian"
  >
    {Default()}
  </CharMapContextProvider>
);

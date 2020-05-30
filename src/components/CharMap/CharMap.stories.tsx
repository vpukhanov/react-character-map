import React from "react";
import { customCharacterData } from "../CharMapSelector/CharMapSelector.stories";
import CharMap from "./CharMap";

export default {
  component: CharMap,
  title: "CharMap",
  decorators: [
    (story: Function) => <div style={{ maxWidth: 600 }}>{story()}</div>,
  ],
};

export const Default = () => <CharMap onSelect={() => {}} />;

export const Alphabets = () => (
  <CharMap characterData={customCharacterData} onSelect={() => {}} />
);

export const AlphabetsWithRussianSelectedByDefault = () => (
  <CharMap
    characterData={customCharacterData}
    defaultSelectedCategory="Russian"
    onSelect={() => {}}
  />
);

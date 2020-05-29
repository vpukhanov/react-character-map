export interface CharacterInfo {
  char: string;
  name?: string;
  entity?: string;
  hex?: string;
}

export type CharMapData = Record<string, CharacterInfo[]>;

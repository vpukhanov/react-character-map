import PropTypes from "prop-types";

export interface CharacterInfo {
  char: string;
  name?: string;
  entity?: string;
  hex?: string;
}

export const CharacterInfoShape = PropTypes.exact({
  char: PropTypes.string.isRequired,
  name: PropTypes.string,
  entity: PropTypes.string,
  hex: PropTypes.string,
});

export type CharMapData = Record<string, CharacterInfo[]>;

export const CharMapDataShape = PropTypes.objectOf(
  PropTypes.arrayOf(CharacterInfoShape.isRequired).isRequired
);

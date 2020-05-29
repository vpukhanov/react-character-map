import cn from "classnames";
import React, { useContext, useMemo } from "react";
import CharMapContext from "../../context/CharMapContext";
import "./CharMapCategoriesList.css";

export interface CharMapCategoriesListProps {
  buttonClassName?: string;
  activeButtonClassName?: string;
}

const CharMapCategoriesList: React.FC<CharMapCategoriesListProps> = (props) => {
  const {
    characterData,
    selectedCategory,
    setSelectedCategory,
    getDisplayCategoryName,
  } = useContext(CharMapContext);

  const categories = useMemo(() => Object.keys(characterData), [characterData]);
  const buttonClassName =
    props.buttonClassName ?? "charMap--categoriesList-button";
  const activeButtonClassName =
    props.activeButtonClassName ?? "charMap--categoriesList-button-selected";

  return (
    <div className="charMap--categoriesList">
      {categories.map((category) => (
        <button
          key={category}
          className={cn(buttonClassName, {
            [activeButtonClassName]: category === selectedCategory,
          })}
          onClick={() => setSelectedCategory(category)}
        >
          {getDisplayCategoryName(category)}
        </button>
      ))}
    </div>
  );
};

export default CharMapCategoriesList;

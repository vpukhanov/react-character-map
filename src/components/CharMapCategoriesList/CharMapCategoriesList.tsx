import React, { useContext, useMemo } from "react";
import CharMapContext from "../../context/CharMapContext";
import cn from "classnames";
import "./CharMapCategoriesList.css";

const CharMapCategoriesList: React.FC = () => {
  const { characterData, selectedCategory, setSelectedCategory } = useContext(CharMapContext);
  const categories = useMemo(() => Object.keys(characterData), [characterData]);
  return (
    <div className="charMap--categoriesList">
      {categories.map((category) => (
        <button
          key={category}
          className={cn("charMap--categoriesList-button", {
            "charMap--categoriesList-button-selected":
              category === selectedCategory,
          })}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CharMapCategoriesList;

import React from "react";
import Recipe from "../model/Recipe";


const Result = (recipe: Recipe): React.ReactElement => {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <img ref={recipe.image}/>
            <p>{`Missing : ${recipe.missedIngredients}`}</p>
            <p>{`Used    : ${recipe.usedIngredients}`}</p>
            <p>{`Unused  : ${recipe.unusedIngredients}`}</p>
        </div>
    );
}

export default Result;

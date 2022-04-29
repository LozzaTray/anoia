import React from "react";
import Ingredient from "../model/Ingredient";
import Recipe from "../model/Recipe";


const Result = (recipe: Recipe): React.ReactElement => {
    const getIngredientList = (ingredients: Ingredient[]) => (
        ingredients.map(ing => ing.name).join(", ")
    );

    let unusedIngredients
    if (recipe.unusedIngredients.length > 0) {
        unusedIngredients =
            <p className="Color-text, Orange-text">{`Unused : ${getIngredientList(recipe.unusedIngredients)}`}</p>
    }

    return (
        <div style={{justifyContent:"center", width:"100%"}}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image}/>
            <p className="Color-text, Red-text">{`Missing : ${getIngredientList(recipe.missedIngredients)}`}</p>
            <p className="Color-text, Green-text">{`Used : ${getIngredientList(recipe.usedIngredients)}`}</p>
            {unusedIngredients}
        </div>
    );
}

export default Result;

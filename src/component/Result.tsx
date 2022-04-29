import React from "react";
import Ingredient from "../model/Ingredient";
import Recipe from "../model/Recipe";


const Result = (recipe: Recipe): React.ReactElement => {
    const getIngredientList = (ingredients: Ingredient[]) => (
        ingredients.map(ing => ing.name).join(", ")
    );

    return (
        <div style={{justifyContent:"center", width:"100%"}}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image}/>
            <p>{`Missing : ${getIngredientList(recipe.missedIngredients)}`}</p>
            <p>{`Used : ${getIngredientList(recipe.usedIngredients)}`}</p>
            <p>{`Unused : ${getIngredientList(recipe.unusedIngredients)}`}</p>
        </div>
    );
}

export default Result;

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

    function openRecipe() {

    }

    return (
        <div onClick={openRecipe} style={{display:"flex", padding:"10px",backgroundColor:"slategrey", maxWidth:"1200px"}}>
            <img className="vertical-center, Recipe-img" src={recipe.image}/>
            <div style={{width:"100%", height:"100%"}}>
                <div style={{justifyContent:"center", width:"100%"}}>
                    <h2 className="Recipe-header">{recipe.title}</h2>
                </div>
                <p className="Color-text, Red-text">{`Missing : ${getIngredientList(recipe.missedIngredients)}`}</p>
                <p className="Color-text, Green-text">{`Used : ${getIngredientList(recipe.usedIngredients)}`}</p>
                {unusedIngredients}
            </div>
        </div>
    );
}

export default Result;

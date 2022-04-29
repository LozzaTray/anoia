import React, {useEffect, useState} from "react";
import Ingredient from "../model/Ingredient";
import Recipe from "../model/Recipe";
import {getRecipeInformation, getRecipes} from "../utils/api";
import RecipeInformation from "../model/RecipeInformation";


const Result = (recipe: Recipe): React.ReactElement => {
    const getIngredientList = (ingredients: Ingredient[]) => (
        ingredients.map(ing => ing.name).join(", ")
    );

    let unusedIngredients
    if (recipe.unusedIngredients.length > 0) {
        unusedIngredients =
            <p className="Color-text, Orange-text">{`Unused : ${getIngredientList(recipe.unusedIngredients)}`}</p>
    }

    const apiKey = import.meta.env.VITE_SPOON_KEY;
    const shouldStub = import.meta.env.VITE_STUB_DATA;

    function openRecipe() {
        getRecipeInformation(recipe.id, apiKey, shouldStub)
            .then(val => window.open(val?.spoonacularSourceUrl));
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

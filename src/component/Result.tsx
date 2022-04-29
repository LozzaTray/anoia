import React from "react";
import Ingredient from "../model/Ingredient";
import Recipe from "../model/Recipe";
import {getRecipeInformation, getRecipes} from "../utils/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


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
        <Card style={{ display: "flex", margin: "10px", width: "400px", maxWidth: "80vw" }}>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Img src={recipe.image} style={{ width: "100%", height: "20vw", objectFit: "contain" }} />
            <Card.Body>
                <Card.Text className="Color-text, Red-text">{`Missing : ${getIngredientList(recipe.missedIngredients)}`}</Card.Text>
                <Card.Text className="Color-text, Green-text">{`Used : ${getIngredientList(recipe.usedIngredients)}`}</Card.Text>
                {unusedIngredients}
                <Button variant="primary" onClick={openRecipe}>Full Recipe</Button>
            </Card.Body>
        </Card>
    );
}

export default Result;

import Recipe from "../model/Recipe";
import RecipeInformation from "../model/RecipeInformation"
import axios from "axios";
import {data as mockData} from "./mock.json";

export const getRecipes = async (userIngredients: string[], apiKey: string, shouldStub: boolean): Promise<Recipe[]> => {
    if (!shouldStub) {
        const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients";
        const queryUrl = `${baseUrl}?ingredients=${userIngredients.join(",")}&apiKey=${apiKey}`
        const res = await axios.get<Recipe[]>(queryUrl);
        console.log(res.data)
        return res.data
    }
    return mockData;
}

export const getRecipeInformation = async (recipeId: number, apiKey: string, shouldStub: boolean): Promise<RecipeInformation> => {
    if (!shouldStub) {
        const baseUrl = "https://api.spoonacular.com/recipes/";
        const queryUrl = `${baseUrl}${recipeId}/information&apiKey=${apiKey}`
        const res = await axios.get<RecipeInformation>(queryUrl);
        return res.data
    }
    return {
        "id": 716429,
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    }
}
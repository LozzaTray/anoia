import Recipe from "../model/Recipe";
import axios from "axios";

export const getRecipes = async (userIngredients: string[], apiKey: string): Promise<Recipe[]> => {
    const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients";
    const queryUrl = `${baseUrl}?ingredients=${userIngredients.join(",")}&apiKey=${apiKey}`
    const res = await axios.get<Recipe[]>(queryUrl);
    return res.data;
}
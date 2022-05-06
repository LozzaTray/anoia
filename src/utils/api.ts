import Recipe from "../model/Recipe";
import RecipeInformation from "../model/RecipeInformation"
import axios from "axios";

export const getRecipes = async (userIngredients: string[], apiKey: string, shouldStub: boolean): Promise<Recipe[]> => {
    console.log(shouldStub)
    if (!shouldStub) {
        console.log('fetching')
        const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients";
        const queryUrl = `${baseUrl}?ingredients=${userIngredients.join(",")}&apiKey=${apiKey}`
        const res = await axios.get<Recipe[]>(queryUrl);
        console.log(res.data)
        return res.data
    }
    console.log('stubbing')
    return [
        {
            "id": 73420,
            "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            "missedIngredients": [
                {
                    "id": 18371,
                    "name": "baking powder",
                },
                {
                    "id": 2010,
                    "name": "cinnamon",
                },
                {
                    "id": 1123,
                    "name": "egg",
                }
            ],
            "title": "Apple Or Peach Strudel",
            "unusedIngredients": [],
            "usedIngredients": [
                {
                    "id": 9003,
                    "name": "apples",
                }
            ]
        },
        {
            "id": 73420,
            "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            "missedIngredients": [
                {
                    "id": 18371,
                    "name": "baking powder",
                },
                {
                    "id": 2010,
                    "name": "cinnamon",
                },
                {
                    "id": 1123,
                    "name": "egg",
                }
            ],
            "title": "Apple Or Peach Strudel",
            "unusedIngredients": [],
            "usedIngredients": [
                {
                    "id": 9003,
                    "name": "apples",
                }
            ]
        },
        {
            "id": 73420,
            "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            "missedIngredients": [
                {
                    "id": 18371,
                    "name": "baking powder",
                },
                {
                    "id": 2010,
                    "name": "cinnamon",
                },
                {
                    "id": 1123,
                    "name": "egg",
                }
            ],
            "title": "Apple Or Peach Strudel",
            "unusedIngredients": [],
            "usedIngredients": [
                {
                    "id": 9003,
                    "name": "apples",
                }
            ]
        },{
            "id": 73420,
            "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            "missedIngredients": [
                {
                    "id": 18371,
                    "name": "baking powder",
                },
                {
                    "id": 2010,
                    "name": "cinnamon",
                },
                {
                    "id": 1123,
                    "name": "egg",
                }
            ],
            "title": "Apple Or Peach Strudel",
            "unusedIngredients": [],
            "usedIngredients": [
                {
                    "id": 9003,
                    "name": "apples",
                }
            ]
        },
        {
            "id": 73420,
            "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
            "missedIngredients": [
                {
                    "id": 18371,
                    "name": "baking powder",
                },
                {
                    "id": 2010,
                    "name": "cinnamon",
                },
                {
                    "id": 1123,
                    "name": "egg",
                }
            ],
            "title": "Apple Or Peach Strudel",
            "unusedIngredients": [],
            "usedIngredients": [
                {
                    "id": 9003,
                    "name": "apples",
                }
            ]
        },
        {
            "id": 632660,
            "image": "https://spoonacular.com/recipeImages/632660-312x231.jpg",
            "missedIngredients": [
                {
                    "id": 1001,
                    "name": "butter",
                },
                {
                    "id": 1079003,
                    "name": "red apples",
                },
                {
                    "id": 2010,
                    "name": "cinnamon",
                },
                {
                    "id": 19719,
                    "name": "apricot preserves",
                },
                {
                    "id": 19719,
                    "name": "apricot preserves",
                },
                {
                    "id": 19719,
                    "name": "apricot preserves",
                },
                {
                    "id": 19719,
                    "name": "apricot preserves",
                },
                {
                    "id": 19719,
                    "name": "apricot preserves",
                },
                {
                    "id": 19719,
                    "name": "apricot preserves",
                },
                {
                    "id": 19719,
                    "name": "apricot preserves",
                }
            ],
            "title": "Apricot Glazed Apple Tart",
            "unusedIngredients": [
                {
                    "id": 9003,
                    "name": "apples",
                }
            ],
            "usedIngredients": []
        }
    ];
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
import React, { useState, useEffect } from "react";
import Recipe from "../model/Recipe";
import Result from "./Result";
import { getRecipes } from "../utils/api";

interface Props {
    ingredients: string[]
}

const ResultList = ({ ingredients }: Props): React.ReactElement => {
    const apiKey = import.meta.env.VITE_SPOON_KEY;

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(
        () => {
            getRecipes(ingredients, apiKey).then(vals => setRecipes(vals));
        },
        [ingredients]
    );

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                recipes.length === 0 ?
                    <p>No recipes</p>
                    :
                    recipes.map((recipe, idx) => (
                        <Result key={`res-${idx}`} {...recipe} />
                    ))
            }
        </div>
    )
}

export default ResultList;

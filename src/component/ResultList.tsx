import React, { useState, useEffect } from "react";
import Recipe from "../model/Recipe";
import Result from "./Result";
import { getRecipes } from "../utils/api";

interface Props {
    ingredients: string[]
}

const ResultList = ({ ingredients }: Props): React.ReactElement => {
    const apiKey = import.meta.env.VITE_SPOON_KEY;
    const shouldStub = import.meta.env.VITE_STUB_DATA;

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(
        () => {
            getRecipes(ingredients, apiKey, shouldStub).then(vals => setRecipes(vals));
        },
        [ingredients]
    );

    return (
        <div style={{justifyContent:"center", width:"100%"}}>
            {
                recipes.length === 0 ?
                    <p>No recipes</p>
                    :
                    recipes.map((recipe, idx) => (
                        <div style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
                            <Result key={`res-${idx}`} {...recipe} />
                        </div>
                    ))
            }
        </div>
    )
}

export default ResultList;

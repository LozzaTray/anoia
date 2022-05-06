import React, { useState, useEffect } from "react";
import Recipe from "../model/Recipe";
import Result from "./Result";
import { getRecipes } from "../utils/api";
import Button from "react-bootstrap/Button";

interface Props {
    ingredients: string[]
}

const ResultList = ({ ingredients }: Props): React.ReactElement => {
    const apiKey = import.meta.env.VITE_SPOON_KEY;
    const shouldStub = import.meta.env.VITE_STUB_DATA === 'true';

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [maxToDisplay, setMaxToDisplay] = useState<number>(4)

    useEffect(
        () => {
            getRecipes(ingredients, apiKey, shouldStub).then(vals => setRecipes(vals));
        },
        [ingredients]
    );

    function showMore() {
        setMaxToDisplay(maxToDisplay + 4)
    }

    let button
    if (recipes.length > maxToDisplay) {
        button = <Button variant="primary" type="submit" onClick={showMore} style={{fontFamily: "copperplate", marginBottom: "20px"}}>
            Show more
        </Button>
    }



    return (
        <div>
            <div className="center-children">
                <div className="center-children" style={{maxWidth: "900px", width: "100%"}}>
                    {
                        recipes.length === 0 ?
                            <p>No recipes</p>
                            :
                            recipes.slice(0, maxToDisplay).map((recipe, idx) => (
                                <Result key={`res-${idx}`} {...recipe} />
                            ))
                    }
                </div>
            </div>
            {button}
        </div>
    )
}

export default ResultList;

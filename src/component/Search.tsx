import React, { Dispatch, SetStateAction } from "react";

interface Props {
    setIngredients: Dispatch<SetStateAction<string[]>>;
}

const Search = ({ setIngredients }: Props): React.ReactElement => {
    const [value, setValue] = React.useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const ingredients = value.split(",").map(ing => ing.trim());
        setIngredients(ingredients);
    };
    return (
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            <label>
                Ingredients:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Search;

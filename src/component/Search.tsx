import React, { Dispatch, SetStateAction } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

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
        console.log(event);
        const ingredients = value.split(",").map(ing => ing.trim());
        setIngredients(ingredients);
    };

    return (
        <Form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <InputGroup style={{maxWidth: "500px"}} className="mb-3">
                <InputGroup.Text id="ingred-id">Ingredients</InputGroup.Text>
                <Form.Control
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Chicken, Onion"
                    aria-label="Ingredients"
                    aria-describedby="ingred-id"
                />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </InputGroup>
        </Form >
    );
}

export default Search;

import React from "react";

const Search = (): React.ReactElement => {
    const [value, setValue] = React.useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert("A name was submitted: " + value);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} style={{display: "flex"}}>
            <label>
                Ingredients:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Search;

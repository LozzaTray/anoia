import React from "react";
import Ingredient from "../model/Ingredient";
import Recipe from "../model/Recipe";
import { getRecipeInformation } from "../utils/api";
import { ListGroup, ListGroupItem, Badge, Card, Button, Tab, Nav } from "react-bootstrap";


const Result = (recipe: Recipe): React.ReactElement => {
    const getIngredientList = (ingredients: Ingredient[], character: string, style: "danger" | "warning" | "success") => (
        <ListGroup variant="flush">
            {ingredients.sort((a, b) => a.name < b.name ? -1: 1).map(ing => (
                <ListGroupItem className="d-flex justify-content-between align-items-start">
                    {" " + ing.name}
                    <Badge bg={style}>{character}</Badge>
                </ListGroupItem>
            ))}
        </ListGroup>
    );

    const apiKey = import.meta.env.VITE_SPOON_KEY;
    const shouldStub = import.meta.env.VITE_STUB_DATA === 'true';

    function openRecipe() {
        getRecipeInformation(recipe.id, apiKey, shouldStub)
            .then(val => window.open(val?.spoonacularSourceUrl));
    }

    return (
        <Card style={{ display: "flex", margin: "10px", width: "400px", maxWidth: "80vw" }}>
            <Card.Header>
                <Card.Img src={recipe.image} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {recipe.title}
                </Card.Title>
                <Card.Text>
                    A mischievous little dish from the south of Italy, famed for its bright colours and complex flavours.
                </Card.Text>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey={`#${recipe.id}-missing`}>
                    <Nav fill variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey={`#${recipe.id}-missing`}>
                                <Badge bg="danger">{recipe.missedIngredients.length}</Badge>
                                {" Missing"}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={`#${recipe.id}-used`}>
                                <Badge bg="success">{recipe.usedIngredients.length}</Badge>
                                {" Used"}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={`#${recipe.id}-unused`}>
                                <Badge bg="warning">{recipe.unusedIngredients.length}</Badge>
                                {" Unused"}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey={`#${recipe.id}-missing`}>
                            {getIngredientList(recipe.missedIngredients, "⨯", "danger")}
                        </Tab.Pane>
                        <Tab.Pane eventKey={`#${recipe.id}-used`}>
                            {getIngredientList(recipe.usedIngredients, "✓", "success")}
                        </Tab.Pane>
                        <Tab.Pane eventKey={`#${recipe.id}-unused`}>
                            {getIngredientList(recipe.unusedIngredients, "-", "warning")}
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>


            <Card.Footer style={{ background: "transparent" }}>
                <Button style={{ width: "100%" }} variant="outline-primary" onClick={openRecipe}>Full Recipe</Button>
            </Card.Footer>
        </Card>
    );
}

export default Result;

import React, { useState } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import ResultList from "./component/ResultList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  return (
    <div className="App">
        <Header/>
        <div className="center-children">
            <Card style={{ display: "flex", margin: "10px", marginTop:"30px", width:"15vw", maxWidth: "300px", maxHeight: "800px", }}>
                <Card.Header>{"YOUR AD HERE"}</Card.Header>
                <Card.Img src={"https://picsum.photos/200/300"} style={{ width: "100%",  objectFit: "contain" }} />
            </Card>
            <div>
                <Search setIngredients={setIngredients} />
                <ResultList ingredients={ingredients} />
            </div>
            <Card style={{ display: "flex", margin: "10px", marginTop:"30px", width:"15vw", maxWidth: "300px", maxHeight: "800px", }}>
                <Card.Header>{"YOUR AD HERE"}</Card.Header>
                <Card.Img src={"https://picsum.photos/200/300"} style={{ width: "100%",  objectFit: "contain" }} />
            </Card>
        </div>
    </div>
  )
}

export default App

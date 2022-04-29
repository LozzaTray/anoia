import { useState } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import ResultList from "./component/ResultList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  return (
    <div className="App">
      <Header/>
      <Search setIngredients={setIngredients} />
      <ResultList ingredients={ingredients} />
    </div>
  )
}

export default App

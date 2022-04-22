import { useState } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import ResultList from "./component/ResultList";
import "./App.css";

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const key = import.meta.env.VITE_SPOON_KEY;
  console.log(key);

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Search setIngredients={setIngredients} />
        <ResultList ingredients={ingredients} />
      </header>
    </div>
  )
}

export default App

import { useState } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const key = import.meta.env.VITE_SPOON_KEY;
  console.log(key);

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Search/>
      </header>
    </div>
  )
}

export default App

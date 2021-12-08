import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import BackgroundColorChanger from "./BackgroundColorChanger.js"
import Child from "./Child"

function App() {
  const [counter, setCounter] = useState(100);
  const [backgroundColorValue, setBackgroundColorValue] = useState("blue")
  let names = ["matt", "nunny", "fido", "leeto", "Aragorn"]
  let namesAsH3 = names.map((name, index) => <h3 key={index}>{name}</h3>)
  console.log(namesAsH3)

  return (
    <div id="nose">
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}> Click Me To increment</button>
        <button onClick={() => setCounter(counter - 1)}> Click Me To increment</button>
        <BackgroundColorChanger backgroundColorValue={backgroundColorValue}></BackgroundColorChanger>
      </div>

      {namesAsH3}
      {[<h1>myArrayText</h1>, <h1>myArrayText2</h1>]}

      <Child counter={counter + 1} setCounter={setCounter}></Child>
    </div >

  );
}

export default App;

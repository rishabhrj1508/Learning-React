import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("Clicked", counter);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("clicked", counter);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={decreaseValue}>Decrease</button>
    </>
  );
}

export default App;

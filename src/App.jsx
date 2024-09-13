import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Keypad from './keypad';

function App() {
  let [input, setInput] = useState("");

  //on click showing the values
  function handleClick(value) {
    setInput((prevInput) => prevInput + value);
  }

  //for calculating the values
  function calculate(value){
   let outputVal = eval(input)
   setInput(outputVal)
  }

  //for clearing the values
  function handleClear(){
    setInput("")
  }

  return (
    <>
      <div className="container">
        <h1>Calculator App using React</h1>
        <div className="calculator">
          <input type="text" value={input} className="output" readOnly />
          <Keypad handleClick={handleClick} handleClear={handleClear}  calculate={calculate}></Keypad>
        </div>
      </div>
    </>
  );
}

export default App;

import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
        e.preventDefault(); 

        setResult((result) => result - Number(inputRef.current.value)); 

  };
 
  function times(e) { 
    // Add the code for the plus function 
        e.preventDefault(); 

        setResult((result) => result * Number(inputRef.current.value)); 

  }; 
 
  function divide(e) {
        e.preventDefault(); 
        setResult((result) => result / Number(inputRef.current.value)); 

    // Add the code for the divide function 
  };
 
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";


    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) {
    
        resultRef.current.value = "0";

  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
                <button onClick={minus}>Minus</button> 
 
                <button onClick={times}>Multiply</button> 
 
                <button onClick={divide}>Divide</button> 

                <button onClick={resetInput}>Reset Input</button> 
 
               <button onClick={resetResult}>Reset Result</button> 
 
      </form> 
    </div> 
  ); 
} 
 
export default App; 

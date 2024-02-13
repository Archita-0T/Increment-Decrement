import { useState } from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="main">
      <div className="title">
        Increment & Decrement
      </div>
      <div className="content">
        <button onClick={decreaseHandler} className="decrease">
          -
        </button>
        <div className="text">
          {count}

        </div>
        <button onClick={increaseHandler} className="increase">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="reset">
        Reset
      </button>
   
    </div>
  );
}

export default App;

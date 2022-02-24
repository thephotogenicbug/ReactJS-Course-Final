import React, { useState } from "react";

const Hooks = () => {
  // Declare a new state variable, which we call "count"
   const state = useState(123) // useState(123) initialState // useState Contains array
   console.log(state)

  // Destructure example 
  let [Red, Orange, Green] = [50, 205, 150]

  console.log(Red); 
  // count is initalValue setCount is a function
  // there's an array inside useState we have destructured 
  // and splitted into two parameter or two items
  // count is initalValue
  // setCount is function
  // using React Hooks we are modifying there values
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>React Hooks Example</h3>
        </div>
        <div>
          <h1 className="text-danger">You clicked {count} times</h1>
          <button
            className="btn btn-primary mt-4"
            onClick={() => setCount(count + 1)}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hooks;

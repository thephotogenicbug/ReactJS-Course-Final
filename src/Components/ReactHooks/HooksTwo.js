import React, { useState } from "react";

const HooksTwo = () => {
  const [counter, updateCounter] = useState(5);

  const one = () => {
    updateCounter(counter + 5);
  };

  const two = () => {
    updateCounter(counter - 5);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="text-primary">Counter using React Hooks</h3>
          <h4>{counter}</h4>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-1"></div>
        <div className="col-md-2"></div>
        <div className="col-md-3 p-2">
          <button className="btn btn-success" onClick={one}>
            {" "}
            + The {counter} By 5
          </button>
        </div>
        <div className="col-md-3  p-2">
          <button className="btn btn-success" onClick={two}>
            {" "}
            - The {counter} By 5
          </button>
        </div>
      </div>
    </div>
  );
};
export default HooksTwo;

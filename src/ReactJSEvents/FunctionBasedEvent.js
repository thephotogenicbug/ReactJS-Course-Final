import React from "react";

const Event = () => {

  function handleClick() {
    alert("I am working")  
    console.log("I am working");
  }

  const ArrowClick = () => {
      alert("I am working from Arrow Function");
    console.log("I am working from Arrow Function");
  };

  return (
    <div className="container text-center mt-4">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleClick}>
            Login
          </button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger" onClick={ArrowClick}>
            Arrow Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;

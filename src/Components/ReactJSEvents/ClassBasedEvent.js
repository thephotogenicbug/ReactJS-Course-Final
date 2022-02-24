import React, { Component } from "react";
import ClassBasedEventOne from "./ClassBasedEventOne";

class ClassBasedEvent extends Component {
  constructor() {
    super();
    console.log(this);
  }

  handleClick() {
    alert("Class Method working");
    console.log(this);
  }

  handleMyClick = (e) => {
    alert("Class Method working Arrow Function");
    console.log(e);
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div className="col-md-2 p-3">
            {/* in Class Component need to pass this method this keyword contains all the scope
                
             */}
            <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>
              Click Me
            </button>
          </div>
          <div className="col-md-2 p-3">
            <button className="btn btn-danger" onClick={this.handleMyClick}>
              Arrow Function
            </button>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row mt-4">
            <ClassBasedEventOne />
        </div>
      </div>
    );
  }
}
export default ClassBasedEvent;

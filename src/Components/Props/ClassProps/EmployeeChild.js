import React, { Component } from "react";

class ClassEmployeeChild extends Component {
  render() {
    return (
      <div>
        {/* JavaScript “this” keyword. 
        “This” keyword refers to an object that is executing the current piece of code. 
        It references the object that is executing the current function 
        */}
        <h3>Hello, {this.props.name}</h3>
        <h3>Your Emp ID: {this.props.empid}</h3>
      </div>
    );
  }
}

export default ClassEmployeeChild;

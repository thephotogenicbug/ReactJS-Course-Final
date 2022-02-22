import React, { Component } from "react";
import ClassEmployeeChild from "./EmployeeChild";

class ClassEmployeeParent extends Component {
  render() {
    return (
      <div>
        <h2 style={{color:'blue'}}>Props Using Class Component</h2>
        <ClassEmployeeChild name="Naveen" empid={1001} />
      </div>
    );
  }
}

export default ClassEmployeeParent;

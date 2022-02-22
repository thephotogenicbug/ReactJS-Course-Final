import React from "react";

// props will accept all the arguments
// Function Based Props
function EmployeeChild(props) {
  return (
    <div>
      <div>
        <h3>Hello, {props.name}</h3>
        <h3>Your Emp ID: {props.empid}</h3>
      </div>
    </div>
  );
}
export default EmployeeChild;

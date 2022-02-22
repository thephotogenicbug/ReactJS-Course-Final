import React from "react";
import EmployeeChild from "./EmployeeChild";
// Function Based Props
function EmployeeParent() {
  return (
    <div>
      <h2 style={{color:'orange'}}>Props Using Functional Component</h2>
      {/* pass arguments here */}
      <EmployeeChild name="Naveen" empid={1001} />
    </div>
  );
}
export default EmployeeParent;

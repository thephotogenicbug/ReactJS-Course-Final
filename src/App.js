import React from 'react';
import FirstComponent from './Components/ClassComponent/ClassComponent1';
import SecondComponent from './Components/ClassComponent/ClassComponent2';
import FunctionComponent from './Components/FunctionalComponent/FunctionalComponent';
import './App.css';
import EmployeeParent from './Components/Props/FunctionProps/EmployeeParent';
import ClassEmployeeParent from './Components/Props/ClassProps/EmployeeParent';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <hr />
      <FunctionComponent />
      <hr />
      <EmployeeParent />
      <hr />
      <ClassEmployeeParent />
    </div>
  );
}

export default App;

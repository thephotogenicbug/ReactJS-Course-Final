import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import FirstComponent from './Components/ClassComponent/ClassComponent1';
import SecondComponent from './Components/ClassComponent/ClassComponent2';
import FunctionComponent from './Components/FunctionalComponent/FunctionalComponent';
import EmployeeParent from './Components/Props/FunctionProps/EmployeeParent';
import ClassEmployeeParent from './Components/Props/ClassProps/EmployeeParent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<FirstComponent />} />
          <Route exact path="/class2" element={<SecondComponent />} />
          <Route exact path="/classprops" element={<ClassEmployeeParent />} />
          <Route exact path="/function" element={<FunctionComponent />} />
          <Route exact path="/functionprops" element={<EmployeeParent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

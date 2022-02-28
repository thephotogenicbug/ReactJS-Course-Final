import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import FirstComponent from "./Components/ClassComponent/ClassComponent1";
import SecondComponent from "./Components/ClassComponent/ClassComponent2";
import FunctionComponent from "./Components/FunctionalComponent/FunctionalComponent";
import EmployeeParent from "./Components/Props/FunctionProps/EmployeeParent";
import ClassEmployeeParent from "./Components/Props/ClassProps/EmployeeParent";
import StateOne from "./Components/ReactState/state1";
import StateTwo from "./Components/ReactState/state2";
import StateThree from "./Components/ReactState/state3";
import StateFour from "./Components/ReactState/state4";
import StateFive from "./Components/ReactState/state5";
import StateSix from "./Components/ReactState/state6";
import StateSeven from "./Components/ReactState/state7";
import Event from "./Components/ReactJSEvents/FunctionBasedEvent";
import ClassBasedEvent from "./Components/ReactJSEvents/ClassBasedEvent";
import Hooks from "./Components/ReactHooks/Hooks";
import HooksOne from "./Components/ReactHooks/HooksOne";
import HooksTwo from "./Components/ReactHooks/HooksTwo";
import HooksThree from "./Components/ReactHooks/HooksThree";
import HooksFour from "./Components/ReactHooks/HooksFour";
import StateAPI from "./Components/StateAPI/StateAPI";
import StateAPIOne from "./Components/StateAPI/StateAPI1";
import StateAPI2 from "./Components/StateAPI/StateAPI2";
import StateAPIThree from "./Components/StateAPI/StateAPI3";
import TestAPI from "./Components/StateAPI/TestAPI";
import API from "./Components/HooksAPI/HookAPI";
import HooksAPIOne from "./Components/HooksAPI/HooksAPI1";

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
          <Route exact path="/state1" element={<StateOne />} />
          <Route exact path="/state2" element={<StateTwo />} />
          <Route exact path="/state3" element={<StateThree />} />
          <Route exact path="/state4" element={<StateFour />} />
          <Route exact path="/state5" element={<StateFive />} />
          <Route exact path="/state6" element={<StateSix />} />
          <Route exact path="/state7" element={<StateSeven />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/classevent" element={<ClassBasedEvent />} />
          <Route exact path="/hooks" element={<Hooks />} />
          <Route exact path="/hooks1" element={<HooksOne />} />
          <Route exact path="/hooks2" element={<HooksTwo />} />
          <Route exact path="/hooks3" element={<HooksThree />} />
          <Route exact path="/hooks4" element={<HooksFour />} />
          <Route exact path="/stateapi" element={<StateAPI />} />
          <Route exact path="/stateapi1" element={<StateAPIOne />} />
          <Route exact path="/stateapi2" element={<StateAPI2 />} />
          <Route exact path="/stateapi3" element={<StateAPIThree />} />
          <Route exact path="/hooksapi1" element={<TestAPI />} />
          <Route exact path="/hooksapi2" element={<API />} />
          <Route exact path="/hooksapi3" element={<HooksAPIOne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

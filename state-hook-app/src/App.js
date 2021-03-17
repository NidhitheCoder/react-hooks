// Example of counter increment with class component
import React from "react";
import "./App.css";
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import ClassCounterTwo from './components/ClassCounterTwo';
// import ClassCounterFive from './components/ClassCounterFive';
// import HookCounterFive from "./components/HookCounterFive";
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/intervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
import ComponentC from "./components/useContextComponents/ComponentC";

export const UserContext = React.createContext();
export const SampleContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Julia"}>
        <SampleContext.Provider value={"sample data"}>
          <ComponentC />
        </SampleContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

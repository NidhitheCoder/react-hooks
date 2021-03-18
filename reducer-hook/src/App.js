import React from "react";
import "./App.css";
import DataFetchingtwo from "./components/dataFetching/DataFetchingtwo";
// import DataFetchingOne from "./components/dataFetching/DataFetchingOne";
// import CounterThree from "./components/CounterThree";
// import CounterTwo from "./components/CounterTwo";
// import CounterOne from "./components/CounterOne";
// import ComponentA from "./components/contextWithReducer/ComponentA";
// import ComponentB from "./components/contextWithReducer/ComponentB";
// import ComponentC from "./components/contextWithReducer/ComponentC";

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  return (
    <div className="App">
      <DataFetchingtwo />
    </div>
  );
}

export default App;

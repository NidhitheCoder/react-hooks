// Example of counter increment with class component
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
import IntervalClassCounter from './components/intervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;

// Example of counter increment with class component
import './App.css';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';

function App() {
  return (
    <div className="App">
    <HookCounterTwo />
    <ClassCounterTwo/>
    </div>
  );
}

export default App;

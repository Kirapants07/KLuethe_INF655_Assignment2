import './App.css';
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Task Manager</h1>
      <Tasks text="Hello " />
    </div>
  );
}

export default App;
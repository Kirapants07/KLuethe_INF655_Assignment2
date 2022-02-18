import {useState} from "react";
import './App.css';
import TaskData from "./components/TaskData";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

function App() {
  const [taskList, setTaskList] = useState(TaskData);

  const addToDo = (newTask) => {
    const listCopy = [...taskList];
    listCopy.push({id: taskList.length + 1, title: "", description: newTask});
    setTaskList(listCopy);
}

  return (
    <div className="App">
      <h1>Welcome to Task Manager</h1>
      <Tasks text="Hello " taskList={taskList}/>
      <TaskForm addToDo={addToDo} />
    </div>
  );
}

export default App;
import {useState} from "react";
import TaskData from "./TaskData";

function TaskForm ({addToDo}){
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent page reload
        console.log(newTask);
        addToDo(newTask);
        setNewTask('');
    }

    const handleChange = (e) => {
        setNewTask(e.currentTarget.value)
    } 
    

    return (
        <form onSubmit={handleSubmit}>
            <input 
                id = 'addTask' 
                type="text" 
                value={newTask}
                onChange={handleChange}
                placeholder="Enter a task to add"
             />
            <button onClick={handleSubmit} type ="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;
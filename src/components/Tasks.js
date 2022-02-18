import React from "react";
import TaskData from "./TaskData";
import Task from "./Task";

export default function Tasks({text}) {
    const name = "Kira"; 
 
      return (
        <span>
          {text}
          {name} you have a task 
          {TaskData.map((task) => (
            <Task title={task.title} 
            description={task.description} />
          ))}
        </span>
      );

}

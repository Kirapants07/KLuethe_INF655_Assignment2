import {useState} from "react";
import React from "react";
import TaskData from "./TaskData";
import Task from "./Task";

export default function Tasks({text, name, taskList}) {
 
      return (
        <span>
          <h1>
            {text}{name}
          </h1>
          {taskList.map((task) => (
            <Task id={task.id} title={task.title} 
            description={task.description} />
          ))}
        </span>
      );
}

Tasks.defaultProps = {
  name: "Kira",
};

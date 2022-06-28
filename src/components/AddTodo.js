import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AddTodo({setTasks}) {

  const [task, setTask] = useState('');

  const taskSave = () => {
      if (!task) {
        return alert('Please Enter task');
      }
      setTasks(prev  => [...prev, {title: task,completed: false}]);
      setTask('');
  }

  return (
    <div className="form-inline">
      <Input 
        name="task" 
        className="col-lg-8" 
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        />
      <Button className="btn-primary mt-2" name="Add Task" onClick={taskSave} />
    </div>
  );
}

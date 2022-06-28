import React, { useEffect, useState } from 'react'
import {Button} from './index'

export default function TodoItem({tasks, searchVal}) {
    const [taskList, setTaskList] = useState([]);
    useEffect(() => {
        if (searchVal) {
            var searchData = tasks.filter((t) => t.title.toLowerCase().includes(searchVal.toLowerCase()));
            setTaskList(searchData);
        } else {
            setTaskList(tasks);
        }
    }, [tasks, searchVal])
    
    const markAsComplete = (index) => {
        var markers = [...taskList];
        markers[index] = {...markers[index], completed: true};
        setTaskList([...markers]);
    }

    const deleteTask = (index) => {
        console.log(index);
        var removeTask = taskList.filter((item, key) => {
            return index != key
        });
        setTaskList([...removeTask]);
    }    

  return (
    <>
    {taskList.length > 0 && 
        taskList.map((task, index) => (
            <div className="card mb-3" key={index}>
                <div className="card-body">
                    <h5 className={`card-title`}> {task.completed ? <del>{ task.title} </del> : task.title}</h5>
                    {!task.completed && <Button className="btn-primary" name="Mark as Completed" onClick={() => markAsComplete(index) }/>}
                    <Button className="btn-danger" style={{'marginLeft': '10px'}} name="Delete" onClick={() => deleteTask(index) }/>
                </div>
            </div>
        ))
    }
    {!taskList.length  && 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Task not found</h5>
            </div>
        </div>
    }
    </>
  )
}

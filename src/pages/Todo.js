import React, { useState } from 'react'

import {Input} from '../components';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
import AppLayout from '../layouts/app.layout';

export default function Todo() {
    const [searchKeyword, setSearchKeyword] = useState();
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);
    
    
  return (
        <AppLayout>
            <div className='row'>
                <div className='col-lg-6'>
                    <AddTodo setTasks={setTasks}/>
                </div>
                <div className='col-lg-6'>
                    <div className=''>
                    <div className='search-container mb-2'>
                        <Input 
                            name="search"
                            placeholder="Enter Keywords"
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                    </div>
                    <div className='text-center'><h2>Task items</h2></div>
                        <TodoItem tasks={tasks} searchVal={searchKeyword}/>
                    </div> 
                </div>
            </div>
        </AppLayout>
  )
}

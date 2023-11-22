import React, { useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'

function App() {

  const [Tasks, setTasks] = useState([])

  const addTask = (Task) => {
    setTasks([...Tasks,Task])
  }

  const deleteTask = (id) => {
    setTasks(Tasks.filter(task => (task.id != id)))
  }
  
  console.log(Tasks)

  return (
    <div className="container">
    <TaskForm addTask={addTask} />
    <TaskList Tasks={Tasks} deleteTask={deleteTask} />
  </div>
  )
}

export default App

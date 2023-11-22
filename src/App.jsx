import React, { useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'

function App() {

  const [Tasks, setTasks] = useState([])

  const addTask = (Task) => {
    setTasks([...Tasks,Task])
  }
  console.log(Tasks)
  return (
    <>
      <TaskForm addTask={addTask}/>
      <TaskList Tasks={Tasks}/>
    </>
  )
}

export default App

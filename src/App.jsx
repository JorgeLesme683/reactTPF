import React, { useState} from 'react'
import './App.css'
import { TaskForm, Tasklist } from "./components"

function App() {

  const [Tasks, setTasks] = useState([])

  const addTask = (Task) => {
    setTasks([...Tasks, Task])
  }

  const deleteTask = (id) => {
    setTasks(Task.filter(task => (task.id !=id)))
  }

  console.log(Tasks)

  return (
    <div className='container'>
      <TaskForm addTask={addTask} />
      <Tasklist Tasks={Tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App

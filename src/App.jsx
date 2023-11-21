import { useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'

function App() {
  const [tasks, setTasks] = useState([])
  
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  console.log(tasks);
  return (
    <div>
      <TaskForm addTask={addTask}/>
      <TaskList/>
    </div>
  )
}

export default App

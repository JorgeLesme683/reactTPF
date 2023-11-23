import React, { useState} from 'react'
import './App.css'

function App() {

  const [Tasks, setTasks] = useState([])
  const [CurrentTasks, setCurrentTasks] = useState([])
  const [searchString,setsearchString] = useState('')

  const addTask = (Task) => {
    setTasks([...Tasks, Task])
  }

  const deleteTask = (id) => {
    setTasks(Task.filter(task => (task.id !=id)))
  }

  const handleChangeString = (e) => {
    setsearchString(e.target.value)
  }

  useEffect(() => {
    setCurrentTasks(Tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))
}, [searchString,Tasks])

  return (
    <div className='container'>
      <TaskForm addTask={addTask} />
      <div className='search-div'>
      <input type='text'onChange={handleChangeString} value={searchString} placeholder='Buscar Tarea...'></input>
    </div>
    <hr/>
    <TaskList Tasks={CurrentTasks} deleteTask={deleteTask} />    
    </div>
  )
}

export default App

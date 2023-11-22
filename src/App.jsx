import { useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'
import { useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [avlTask, setAvlTask] = useState([])
  const [search, setSearch] = useState('')
  
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (taskId) => {
    const newArray = tasks.filter(task => task.id != taskId)
    setTasks(newArray)
  }

  const changeSearchValue = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setAvlTask(tasks.filter(task =>
      task.titulo.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search, tasks])
  

  console.log(search);
  return (
    <div className='listContainer'>
      <div className='list'>
        <div className='topList'>
          <input type="text" placeholder='Buscar Tarea' value={search} onChange={changeSearchValue}/>
          <TaskForm addTask={addTask}/>
        </div>
        <TaskList tasks={avlTask} className='taskList' deleteTask={deleteTask}/>
      </div>
    </div>
  )
}

export default App
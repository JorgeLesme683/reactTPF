import React from 'react'
import './TaskItem.css'

const TaskItem = ({task, deleteTask}) => {
  return (
    <div className='taskItemContainer'>
      <div className='taskItemHeader'>
          <h3>{task.titulo}</h3>
          <span>{task.fecha}</span>
      </div>
      <p>{task.descripcion}</p>
      <div className='buttonContainer'>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default TaskItem
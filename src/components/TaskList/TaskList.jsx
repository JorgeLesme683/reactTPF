import React from 'react'
import { TaskItem } from '../index'
import './TaskList.css'

const TaskList = ({tasks, deleteTask}) => {
    return (
        <div className='taskList'>
            {tasks.map(task => (<TaskItem task={task} key={task.id} deleteTask={deleteTask}/>))}
        </div>
    )
}

export default TaskList
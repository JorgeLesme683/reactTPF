import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css'

const TaskForm = ({addTask}) => {
  const [empty, setEmpty] = useState(false)
  
  const emptyTrue = () => {
    setEmpty(true)
  }
  
  const emptyFalse = () => {
    setEmpty(false)
  }

  const handleForm = (event) => {
    event.preventDefault()
    
    const titulo = event.target.titulo.value
    const descripcion = event.target.descripcion.value
    const task = {
      titulo,
      descripcion,
      fecha: new Date().toDateString(),
      id: uuidv4()
    }
    console.log(task);
    addTask(task)
    emptyFalse()
  }
  
  return (
    <div className='TaskForm'>
      <button onClick={emptyTrue} className='button green'>Agregar Tarea</button>
      {
        empty
        &&
        <div className='modelBackground'>
          <div className='model'>
            <form className='form' onSubmit={handleForm}>
              <label htmlFor="titulo" className='labels'>Titulo</label>
              <input type="text" id='titulo' name='titulo' className='inputs'/>
              <label htmlFor="descripcion" className='labels'>Descripcion</label>
              <textarea name="descripcion" id="descripcion" cols="30" rows="10" className='inputs'></textarea>
              <div className='buttonsContainer'>
                <button onClick={emptyFalse} className='button red'>Cancelar</button>
                <button type='submit' className='button green'>Agregar</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default TaskForm
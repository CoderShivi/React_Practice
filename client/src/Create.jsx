import React, { useState } from 'react'
import './App.css';
import axios from 'axios'

function Create() {
    const [task,setTask] =useState()
    const handledAdd=()=>{
       axios.post('http://localhost:3001/add',{task:task})
       .then(result=>console.log(result))
       .catch(err => console.log(err))
    }
  return (
    <div className='create-form'>
        <input type="text"  placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
        <button type='button' onClick={handledAdd}>Add</button>
    </div>
  )
}

export default Create
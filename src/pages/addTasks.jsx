import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const AddTasks = () => {
    const [input,setInput] = useState("")
    const id = useSelector(state=> state.tasks.id)
    const dispatch = useDispatch();
    const handleAddTask = ()=>{
        dispatch({type:"add",payload:{id,name:input}})
        setInput("")
    }
    return (
    <div className="w-full h-full flex justify-center items-center 
    bg-slate-800 text-white">
        <label htmlFor="">Task</label>
        <input type="text" placeholder='Entere your Task...' onChange={(e)=>setInput(e.target.value)}
        className="bg-gray-500 rounded-md mx-2  p-2 outline-none" value={input}/>
        <button className='bg-lime-700 px-4 py-2 rounded-md mx-2'
        onClick={handleAddTask}>Add</button>
        <Link to="/tasks">show tasks</Link>
    </div>
    )
}

export default AddTasks

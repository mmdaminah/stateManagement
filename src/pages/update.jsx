import React, { useState ,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const idToUpdate = useSelector(state=>state.tasks.idToUpdate)
    const tasks = useSelector(state=>state.tasks.tasks)
    const dispatch = useDispatch()
    const [input,setInput] = useState("")
    const navigate = useNavigate()
    const handleUpdate = ()=>{
        dispatch({type:'update',payload:{id:idToUpdate,name:input}})
        navigate('/tasks')
    }
    useEffect(()=>{
        const task = tasks.find(item=>item.id === idToUpdate)
        setInput(task.name)
    },[])
    return (
        <div className="w-full h-full flex justify-center items-center 
        bg-slate-800 text-white">
        <label htmlFor="">Task</label>
        <input type="text" placeholder='Entere your Task...' onChange={(e)=>setInput(e.target.value)}
        className="bg-gray-500 rounded-md mx-2  p-2 outline-none" value={input}/>
        <button className='bg-lime-700 px-4 py-2 rounded-md mx-2'
        onClick={handleUpdate}>Confirm</button>
    </div>
    )
}

export default Update

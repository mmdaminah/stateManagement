import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Tasks = () => {
    const tasks = useSelector(state=>state.tasks.tasks)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = (id)=>{
        dispatch({type:'delete',payload:id})
    }
    const handleUpdate = (id)=>{
        dispatch({type:'setIdToUpdate',payload:id})
        navigate('/update')
    }
    return (
        <div className="w-full h-full flex flex-col justify-center items-center 
        bg-slate-800 text-white">
            <Link className='bg-lime-700 px-4 py-2 rounded-md absolute top-2 left-2' to="/">back</Link>
            <div className='flex flex-col'>
            {
            tasks.map(task=>(
                <div key={task.id} className='flex bg-lime-900 p-3 my-2 rounded-md'>
                    <div className='w-96 my-auto'>{task.name}</div>
                    <div>
                        <button className='bg-red-500 px-4 py-2 rounded-md mx-2'
                        onClick={()=>handleDelete(task.id)}
                        >delete</button>
                        <button className='bg-yellow-500 px-4 py-2 rounded-md mx-2'
                        onClick={()=>handleUpdate(task.id)}>update</button>
                    </div>
                </div>
            ))
            }
            {tasks.length === 0 && <h1 className='text-3xl'>there is no task</h1>}
            </div>
        </div>
    )
}

export default Tasks

import { useState } from 'react'
function App() {
  const [input,setInput] = useState("")
  const [id,setId] = useState(0)
  const [tasks,setTasks] = useState([])
  const [idToUpdate,setIdToUpdate] = useState()
  const [showConfirm,setShowConfirm] = useState(false)
  const handleClick = ()=>{
    setTasks([...tasks,{id,name:input}])
    setInput("")
    setId(id+1)
  }
  const handleDelete = (id)=>{
    setTasks(tasks.filter(task=>task.id !== id))
  }
  const handleUpdate = (task)=>{
    setInput(task.name)
    setIdToUpdate(task.id)
    setShowConfirm(true)
  }
  const handleUpdateConfirm = ()=>{
    const task = tasks.find(item=>item.id === idToUpdate)
    task.name = input;
    setTasks([...tasks])
    setShowConfirm(false)
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center 
        bg-slate-800 text-white">
        <div className="my-2">
          <label htmlFor="">Task</label>
          <input type="text" placeholder='Entere your Task...' onChange={(e)=>setInput(e.target.value)}
           value={input} className="bg-gray-500 rounded-md mx-2  p-2 outline-none" />
          {!showConfirm &&
            <button onClick={handleClick}
           className='bg-lime-700 px-4 py-2 rounded-md mx-2'>Add Task</button>
           }
           {showConfirm &&
             <button onClick={handleUpdateConfirm}
              className='bg-lime-700 px-4 py-2 rounded-md'>Confirm</button>
           }
        </div>
        <div className="bg-teal-900 rounded-md overflow-y-auto p-4" style={{width:"40rem",height:"40rem"}}>
        {
          tasks.map((task,index)=>(
            <div key={index} className='flex w-full my-1'>
              <div className='w-2/3'>{task.name}</div>
              <div>
                <button onClick={()=>handleDelete(task.id)}
                className='bg-red-500 px-4 py-2 rounded-md'>delete</button>
              </div>
              <div className='ml-2'>
                <button onClick={()=>handleUpdate(task)}
                className='bg-yellow-500 px-4 py-2 rounded-md'>update</button>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default App;

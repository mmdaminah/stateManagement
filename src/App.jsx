import { useNavigate } from 'react-router-dom'
function App() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full flex justify-center items-center 
        bg-slate-800 text-white">
        <button className='bg-lime-700 px-4 py-2 rounded-md'
        onClick={()=>navigate('/addTask')}>Add Task</button>
        <button className='bg-lime-700 px-4 py-2 rounded-md mx-2'
        onClick={()=>navigate('/tasks')}>Show Tasks</button>
    </div>
  );
}

export default App;

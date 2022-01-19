import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from './redux/userReducer/userReducer';
import { useSelector, useDispatch } from 'react-redux'
import store from './redux/store'
function App() {
  const navigate = useNavigate()
  const users = useSelector(state=>state.users.users)
  const dispatch = useDispatch()
  // useEffect(()=>{
    // store.dispatch(fetchUsers)
    // dispatch(fetchUsers)
  // },[])
  useEffect(()=>{
    // 1
    // const func = fetchUsers("some text")
    // dispatch(func)
    // 2
    dispatch(fetchUsers("some text"))
    
  },[])
  return (
    <div className="w-full h-full flex flex-col justify-center items-center 
        bg-slate-800 text-white">
          <div>
            <button className='bg-lime-700 px-4 py-2 rounded-md'
            onClick={()=>navigate('/addTask')}>Add Task</button>
            <button className='bg-lime-700 px-4 py-2 rounded-md mx-2'
            onClick={()=>navigate('/tasks')}>Show Tasks</button>
            <button className='bg-lime-700 px-4 py-2 rounded-md mx-2'
            onClick={()=>dispatch({type:'change'})}>change text</button>
          </div>
        <div className='flex flex-col my-2'>
          {users.map(user=><div key={user.name} className='bg-fuchsia-900 p-2 my-1 rounded-md'>{user.name}</div>)}
        </div>
    </div>
  );
}

export default App;

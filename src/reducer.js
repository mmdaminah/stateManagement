export const initialState = {
    tasks:[]
}
export const reducer = (state,action)=>{
  switch(action.type){
    case 'add':
      return {...state,tasks:[...state.tasks,action.payload]}
    case 'delete':
      return {...state,tasks:state.tasks.filter(task=>task.id !== action.payload)}
    case 'update':
      const task = state.tasks.find(item=>item.id === action.payload.idToUpdate)
      task.name = action.payload.input;
      return {...state}
  }
}

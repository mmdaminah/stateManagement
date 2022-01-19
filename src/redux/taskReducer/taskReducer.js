const initialState = {
    tasks:[],
    id:0,
    idToUpdate:0
}
const taskReducer = (state = initialState, action )=>{
    switch(action.type){
        case 'add':
            return {
                ...state,
                tasks:[...state.tasks,action.payload],
                id:state.id+1
            }
        case 'delete':
            return {
                ...state,
                tasks:[...state.tasks.filter(task=>task.id !== action.payload)]
            }
        case 'update':
            const task = state.tasks.find(item=>item.id === action.payload.id)
            task.name = action.payload.name;
            return {
                ...state
            }
        case 'setIdToUpdate':
            return {
                ...state,
                idToUpdate:action.payload
            }
        default:
            return state
    }
}
export default taskReducer;
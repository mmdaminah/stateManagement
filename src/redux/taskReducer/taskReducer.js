import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    tasks:[],
    id:0,
    idToUpdate:0
}
const taskReducer = createSlice({
    name:'task',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.tasks = [...state.tasks,action.payload]
            state.id = state.id + 1
        },  
        remove:(state,action)=>{
            state.tasks = state.tasks.filter(task=>task.id !== action.payload)
        },
        update:(state,action)=>{
            const task = state.tasks.find(item=>item.id === action.payload.id)
            task.name = action.payload.name;
        },
        setIdToUpdate:(state,action)=>{
            state.idToUpdate = action.payload
        }
    }
})
export const {add,remove,update,setIdToUpdate} = taskReducer.actions;
export default taskReducer.reducer;
// const taskReducer = (state = initialState, action )=>{
//     switch(action.type){
//         case 'add':
//             return {
//                 ...state,
//                 tasks:[...state.tasks,action.payload],
//                 id:state.id+1
//             }
//         case 'delete':
//             return {
//                 ...state,
//                 tasks:[...state.tasks.filter(task=>task.id !== action.payload)]
//             }
//         case 'update':
//             const task = state.tasks.find(item=>item.id === action.payload.id)
//             task.name = action.payload.name;
//             return {
//                 ...state
//             }
//         case 'setIdToUpdate':
//             return {
//                 ...state,
//                 idToUpdate:action.payload
//             }
//         default:
//             return state
//     }
// }
// export default taskReducer;
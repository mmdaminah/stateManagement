import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    users:[]
}

// export function fetchUsers(text) {
//     console.log(text)
//     return async (dispatch, getState) => {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//       dispatch({type:'addUsers',payload:response.data})
//     }
// }
// export const fetchUsers = async (dispatch,getState)=>{
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//     console.log("before dispatch",getState())
//     dispatch({type:'addUsers',payload:response.data})
//     console.log("after dispatch",getState())
// }

export const fetchUsers = createAsyncThunk(
    "users",
    async()=> {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
    }
)

const userReducer = createSlice({
    name:'user',
    initialState,
    extraReducers:{
        [fetchUsers.fulfilled]:(state,action)=>{
            state.users = action.payload
        }
    }
})
export const { addUsers } = userReducer.actions
export default userReducer.reducer
// const userReducer = (state = initialState,action)=>{
//     switch(action.type){
//         case 'addUsers':
//             return {
//                 ...state,users:[...action.payload]
//             }
//         default:
//             return state
//     }
// }
// export default userReducer;
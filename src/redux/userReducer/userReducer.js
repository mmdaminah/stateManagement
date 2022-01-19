import axios from "axios"

const initialState = {
    users:[]
}

export function fetchUsers(text) {
    console.log(text)
    return async (dispatch, getState) => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      dispatch({type:'addUsers',payload:response.data})
    }
}
// export const fetchUsers = async (dispatch,getState)=>{
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//     console.log("before dispatch",getState())
//     dispatch({type:'addUsers',payload:response.data})
//     console.log("after dispatch",getState())
// }
const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'addUsers':
            return {
                ...state,users:[...action.payload]
            }
        default:
            return state
    }
}
export default userReducer;
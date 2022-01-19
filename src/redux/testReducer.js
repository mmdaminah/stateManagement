import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    test:'test state'
}
const testReducer = createSlice({
    name:'text',
    initialState,
    reducers:{
        change:(state,action)=>{
            state.test = "text changed"
        }
    }
})
export const { change } = testReducer.actions
export default testReducer.reducer
// const testReducer = (state = initialState,action)=>{
//     switch(action.type){
//         case 'change':
//             return {
//                 test:'test state changed'
//             }
//         default:
//             return state
//     }
// }
// export default testReducer
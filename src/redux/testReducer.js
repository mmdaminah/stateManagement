const initialState = {
    test:'test state'
}
const testReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'change':
            return {
                test:'test state changed'
            }
        default:
            return state
    }
}
export default testReducer
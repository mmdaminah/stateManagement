import { combineReducers } from 'redux';
import taskReducer from './taskReducer/taskReducer';
import userReducer from './userReducer/userReducer';
import testReducer from './testReducer'
const rootReducer = combineReducers({
    tasks:taskReducer,
    users:userReducer,
    test:testReducer
})

export default rootReducer;
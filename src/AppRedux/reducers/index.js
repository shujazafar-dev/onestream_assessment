import { combineReducers } from 'redux'
import ReminderReducer from './todos';


const rootReducer = combineReducers({ reminders: ReminderReducer })
export default rootReducer

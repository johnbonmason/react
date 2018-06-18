import { combineReducers } from 'redux';
import fetchEmployeeReducer from './fetchEmployeeReducer';
import selectedEmployeeReducer from './selectedEmployeeReducer';
import createEmployeeReducer from './createEmployeeReducer';

const rootReducer = combineReducers({
    //state: (state = {}) => state
    fetchEmployeeReducer,
    selectedEmployeeReducer,
    createEmployeeReducer
});
export default rootReducer;
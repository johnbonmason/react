import { combineReducers } from 'redux';
import fetchEmployeeReducer from './fetchEmployeeReducer';
import selectedEmployeeReducer from './selectedEmployeeReducer';

const rootReducer = combineReducers({
    //state: (state = {}) => state
    fetchEmployeeReducer,
    selectedEmployeeReducer
});
export default rootReducer;
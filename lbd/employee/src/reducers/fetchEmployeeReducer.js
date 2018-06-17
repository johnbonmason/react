import { FETCH_EMPLOYEE_DBFILE, FETCH_EMPLOYEE } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_DBFILE:
            // console.log('fetch action', action);
            return action.payload;
        case FETCH_EMPLOYEE:
            return state;
        default:
            return state;
    }
}
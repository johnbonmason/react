import { CREATE_EMPLOYEE } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case CREATE_EMPLOYEE:
            // console.log('create action', action);
            return action.payload;
        default:
            return state;
    }
}
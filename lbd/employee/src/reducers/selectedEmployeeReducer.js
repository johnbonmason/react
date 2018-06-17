import { SELECTED_EMPLOYEE } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case SELECTED_EMPLOYEE:
            //console.log('fetch action', action);
            return action.payload;
        default:
            return state;
    }
}
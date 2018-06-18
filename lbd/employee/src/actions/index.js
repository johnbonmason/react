import Employees from '../data/mock-data.json';
import axios from 'axios';
export const FETCH_EMPLOYEE_DBFILE = 'FETCH_EMPLOYEE_DBFILE';
export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const SELECTED_EMPLOYEE = 'SELECTED_EMPLOYEE';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';

const dbUrl =  'http://localhost:3000/employee';
export function fetchEmployeeDbFile(state) {
    return {
        type: FETCH_EMPLOYEE_DBFILE,
        payload: Employees.employees
    };
}
export function selectedEmployee(employee) {
    return {
        type: SELECTED_EMPLOYEE,
        payload: employee
    }
}
export function createEmployee(employee) {
    return function(dispatch) {
        const request = axios.post(dbUrl, employee);
        request.then(response => {
            dispatch({
                type: CREATE_EMPLOYEE,
                payload: response.data
            })
        })
        .catch(error => console.log(error))
    }
}

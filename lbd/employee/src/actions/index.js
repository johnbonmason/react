import Employees from '../data/mock-data.json';

export const FETCH_EMPLOYEE_DBFILE = 'FETCH_EMPLOYEE_DBFILE';
export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const SELECTED_EMPLOYEE = 'SELECTED_EMPLOYEE';

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
import React, { Component } from 'react';
import '../App.css';
//import Employees from '../data/mock-data.json';
import { fetchEmployeeDbFile, selectedEmployee } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //employees: Employees.employees
        }
    }
    componentWillMount() {
        this.props.fetchEmployeeDbFile();
        //console.log(this.props);
    }
    renderEmployeeList() {
        return this.props.fetchEmployeeListProps.map((employee, index) => {
        // return this.state.employees.map((employee, index) => {
            return (
                <li
                    className="list-group-item"
                    key={index}
                    onClick={() => {this.props.selectedEmployee(employee)}}
                >
                    <p style={{float: 'left'}}><strong>Name: {employee.name}</strong></p>
                    <button
                        className="del-button"
                      //onClick={() => this.onDeleteEmployee(employee.id)}
                      style={{float: 'right'}}
                    >
                      &#215;
                    </button>
                    <div style={{clear: 'both'}}></div>
                </li>
            )
        })
    }
    render() {
    //console.log('this', this.props);
    return (
      <div className="">
        <h3>Employee List</h3>
        <ul className="list-group">
            {this.renderEmployeeList()}
        </ul>
      </div>
    );
  }
}
//export default EmployeeList;
function mapStateToProps(state) {
    return {
      fetchEmployeeListProps: state.fetchEmployeeReducer,
      selectedEmployeeProps: state.selectedEmployeeReducer
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchEmployeeDbFile,
        selectedEmployee
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);

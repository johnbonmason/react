import React, { Component } from 'react';
import '../App.css';
import EmployeeList from '../containers/EmployeeList';
import EmployeeDetails from '../containers/EmployeeDetails';
import EmployeeCreate from '../containers/EmployeeCreate';

class App extends Component {
  render() {
    return (
      <div className="container app-container">
        <h1>Employee App</h1>
        <EmployeeCreate />
        <div className="row">
          <div className="col-md-4">
            <EmployeeList parent={'Parent Props'}/>
          </div>
          <div className="col-md-8">
            <EmployeeDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

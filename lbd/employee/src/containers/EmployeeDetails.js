import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    //console.log('details this', this);
    if (this.props.selectedEmployeeProps.length <= 0) {
      return (
        <div className="card">
            ...
        </div>
      )
    }
    return (
      <div className="card">
        <h3>Employee Details</h3>
        <div>Name: {this.props.selectedEmployeeProps.name}</div>
        <div>Position: {this.props.selectedEmployeeProps.position}</div>
        <div>Department: {this.props.selectedEmployeeProps.department}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedEmployeeProps: state.selectedEmployeeReducer
  };
}
export default connect(mapStateToProps)(EmployeeDetails);

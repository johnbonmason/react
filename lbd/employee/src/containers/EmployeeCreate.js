import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: '',
      department: '',
      salary: 0
    }
  }
  onNameChange = (e) => {
    //console.log(this.state);
    this.setState({name: e.target.value});
  }
  onPositionChange = (e) => {
    //console.log(this.state);
    this.setState({position: e.target.value});
  }
  onDepartmentChange = (e) => {
    //console.log(this.state);
    this.setState({department: e.target.value});
  }
  onSalaryChange = (e) => {
    //console.log(this.state);
    this.setState({salary: e.target.value});
  }
  render() {
    //console.log('create this', this);
    console.log(this.state);
    return (
      <div className="card">
        <h3>Employee Create</h3>
        <div>
            <form className="form-group">
            <label className="">
                Name:
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onNameChange.bind(this)}
                />
            </label>
            <label className="">
                Position:
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onPositionChange.bind(this)}
                />
            </label>
            <label className="">
                Department:
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onDepartmentChange.bind(this)}
                />
            </label>
            <label className="">
                Salary:
                <input
                    type="number"
                    className="form-control"
                    onChange={this.onSalaryChange.bind(this)}
                />
            </label>
            <div style={{margin: '5px 0 0 5px'}}>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {}}
                >
                    Create
                </button>
                <button
                    type="reset"
                    className="btn btn-success"
                    onClick={() => {}}
                >
                    Clear
                </button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      
  };
}
export default connect(mapStateToProps)(EmployeeCreate);

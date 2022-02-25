import axios from "axios";
import React, { Component } from "react";
class StateAPIThree extends Component {
  constructor() {
    super();
    this.state = {
      userlist: [],
      name: "",
      email: "",
      gender: "",
      status: "",
      msg: "",
    };
  }

  getUserData = () => {
    let user = "https://6218b17f1a1ba20cbaa85f70.mockapi.io/api/v2/users";
    axios.get(user).then((response) => {
      console.log(response.data);
      this.setState({
        userlist: response.data,
      });
    });
  };

  componentDidMount() {
    this.getUserData();
  }

  processName = (obj) => {
    this.setState({
      name: obj.target.value,
    });
  };

  processEmail = (obj) => {
    this.setState({
      email: obj.target.value,
    });
  };

  processGender = (obj) => {
    this.setState({
      gender: obj.target.value,
    });
  };

  processStatus = (obj) => {
    this.setState({
      status: obj.target.value,
    });
  };

  saveData = () => {
    this.setState({
      msg: "Please wait processing.....",
      userlist: [],
    });

    let url = "https://6218b17f1a1ba20cbaa85f70.mockapi.io/api/v2/users";
    let input = new FormData();

    input.append("name", this.state.name);
    input.append("email", this.state.email);
    input.append("gender", this.state.gender);
    input.append("status", this.state.status);
    axios.post(url, input).then((response) => {
      console.log(response.data);
      this.setState({
        name: "",
        email: "",
        gender: "",
        status: "",
      });
      this.getUserData();
    });
  };

  DeleteData = (recordid) => {
    this.setState({
      msg: "Please wait Processing.....",
      userlist: [],
    });
    let url = "https://6218b17f1a1ba20cbaa85f70.mockapi.io/api/v2/users";
    let input = new FormData();
    input.append("id", recordid);
    axios.post(url, input).then((response) => {
      this.setState({
        msg: response.data,
      });
      this.getUserData();
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="bg-light p-2">
              <h4>Add New Record</h4>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processName}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processEmail}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processGender}
                  value={this.state.gender}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processStatus}
                  value={this.state.status}
                />
              </div>
              <br />
              <button className="btn btn-success" onClick={this.saveData}>
                Save Record
              </button>
            </div>
          </div>
          <div className="col-md-9 mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userlist.map((xuser) => {
                  return (
                    <tr>
                      <td>{xuser.name}</td>
                      <td>{xuser.email}</td>
                      <td>{xuser.gender}</td>
                      <td>{xuser.status}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={this.DeleteData.bind(this, xuser.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default StateAPIThree;

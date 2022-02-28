import axios from "axios";
import React, { Component } from "react";
class StateAPIThree extends Component {
  constructor() {
    super();
    this.state = {
      userlist: [],
      name: "",
      email: "",
      message: "",
      msg: "",
      deletemsg: "",
    };
  }

  getUserData = () => {
    let url = "http://localhost:4000/v1/readuser";
    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({
        userlist: response.data,
      });
    });
  };

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

  processMessage = (obj) => {
    this.setState({
      message: obj.target.value,
    });
  };

  save = () => {
    var url = "http://localhost:4000/v1/newuser";
    var input = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    axios.post(url, input).then((response) => {
      this.setState({
        msg: response.data.message,
        name: "",
        email: "",
        message: "",
      });
      this.getUserData();
    });
  };

  delete = (id) => {
    let url = `http://localhost:4000/v1/deleteuser/${id}`;
    axios.delete(url).then((response) => {
      this.setState({
        deletemsg: response.data.message,
      });
      this.getUserData();
    });
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="bg-light p-2">
              <h4>Add New Record</h4>
              <p className="text-success">{this.state.msg}</p>
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
                <label>Message</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processMessage}
                  value={this.state.message}
                />
              </div>
              <br />
              <button className="btn btn-success" onClick={this.save}>
                Save Record
              </button>
            </div>
          </div>
          <div className="col-md-9 mt-4">
            <p className="text-danger">{this.state.deletemsg}</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userlist.map((xuser, key) => {
                  return (
                    <tr key={key}>
                      <td>{xuser.name}</td>
                      <td>{xuser.email}</td>
                      <td>{xuser.message}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={this.delete.bind(this, xuser._id)}
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

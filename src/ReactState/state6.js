import React, { Component } from "react";
class StateSix extends Component {
  constructor() {
    super();
    this.state = {
      userlist: ["Naveen", "Vijay", "Ajith"],
      newuser: "",
    };
  }
  processNewUser = (obj) => {
    this.setState({
      newuser: obj.target.value,
    });
  };

  SaveUser = () => {
    // concat Combines two or more arrays.
    // This method returns a new array without modifying any existing arrays.
    this.setState({
      userlist: this.state.userlist.concat(this.state.newuser),
      newuser: "",
    });
  };

  DeleteUser = (index) => {
    this.state.userlist.splice(index, 1);
    this.setState({
      userlist: this.state.userlist,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Array Operation</h2>
            <p>
              Available Users:- <span className="text-danger">{this.state.userlist.length}</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="New User"
              onChange={this.processNewUser}
              value={this.state.newuser}
            />
            <br />
            <button className="btn btn-primary" onClick={this.SaveUser}>
              Save user
            </button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Item Index</th>
                  <th>Item Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userlist.map((xuser, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{xuser}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={this.DeleteUser.bind(this, index)}
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
export default StateSix;

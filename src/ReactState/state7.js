import React, { Component } from "react";
class StateSeven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist: ["Apple", "Mango"],
      newitem: "",
    };
  }

  processItem = (obj) => {
    this.setState({
      newitem: obj.target.value,
    });
  };

  saveItem = () => {
    this.setState({
      itemlist: this.state.itemlist.concat(this.state.newitem),
      newitem: "",
    });
  };

  deleteItem = (index) => {
    this.state.itemlist.splice(index, 1);
    this.setState({
      itemlist: this.state.itemlist,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              onChange={this.processItem}
              value={this.state.newitem}
            />
            <br />
            <p>Available Items: {this.state.itemlist.length}</p>
          </div>
          <div className="col-md-2">
            <button className="btn btn-success" onClick={this.saveItem}>
              Save Item
            </button>
          </div>
        </div>
        <div className="row mt-4">
          {this.state.itemlist.map((xitem, index) => {
            return (
              <div className="col-md-3 text-center p-2">
                <div className="card p-2 ">
                  <p key={index}>{xitem}</p>
                  <button
                    className="btn btn-danger"
                    onClick={this.deleteItem.bind(this, index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default StateSeven;

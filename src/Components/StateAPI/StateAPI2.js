import axios from "axios";
import React, { Component } from "react";
class StateAPI2 extends Component {
  constructor() {
    super();
    this.state = {
      citylist: [],
    };
  }

  getData = () => {
    let url = "https://gorest.co.in/public/v2/users";
    axios.get(url).then((response) => {
      this.setState({
        citylist: response.data,
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>DATA</h3>
            <h4>{this.state.citylist.length}</h4>
          </div>
        </div>
        <div className="row mt-3">
          {this.state.citylist.map((xcity, index) => {
            return (
              <div className="col-md-3 form-group" key={index}>
                <p className="p-3 border">{xcity.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default StateAPI2;

import React, { Component } from "react";
class StateAPIOne extends Component {
  constructor() {
    super();
    this.state = {
      citylist: [],
    };
  }

  getData = async () => {
   await fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((result) => this.setState({ citylist: result }));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>State Managment componentDidMount() Example</h3>
            <h4>{this.state.citylist.length}</h4>
            <p>
              componentDidMount() get call automatically after render() it is
              life cycle method of reactjs under state managment
            </p>
            {/* {this.state.citylist.map((xcity, index) =>{
                return(
                    <p key={index}>{xcity.title}</p>
                )
            })} */}
          </div>
        </div>
      </div>
    );
  }
}
export default StateAPIOne;

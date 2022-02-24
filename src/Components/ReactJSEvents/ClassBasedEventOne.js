import React, { Component } from "react";
class ClassBasedEventOne extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      this.setState({
          count: this.state.count + 1
      }, function(){
          console.log("Job Done")
      })
  }

  handClickTwo = () =>{
      this.setState({
          count : this.state.count + 1
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Class Based Event Using Bind</h3>
            Button Presses : {this.state.count}
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <button className="btn btn-success" onClick={this.handleClick.bind(this)}>
              Add One
            </button>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}
export default ClassBasedEventOne;

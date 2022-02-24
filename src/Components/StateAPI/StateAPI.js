import React,{Component} from 'react';
class StateAPI extends Component {
  constructor() {
    super();
    this.state = {
      citylist: [],
    };
  }

  getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => this.setState({ citylist: result }));
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="text-primary">State Managment Using Fetch</h2>
            <h4>Available Cities : {this.state.citylist.length}</h4>
            <button className="btn btn-primary" onClick={this.getData}>
              Load City List
            </button>
          </div>
        </div>
        <div className="row text-center mt-2">
          {this.state.citylist.map((xcity, index) => {
            return (
              <div className="col-md-3 form-group" key={index}>
                <div className="border p-3">
                  <p>{xcity.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default StateAPI;
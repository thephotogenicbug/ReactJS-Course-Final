import React, { Component } from "react";
class StateFive extends Component {
  constructor() {
    super();
    this.state = {
      customer: "",
      product: "",
      vendor: "",
      sales: "",
      income: "",
    };
  }
  processCustomer = (obj) => {
    // method
    // setState is asynchronous! This function gets called, setState is a pre-defined method
    // it used to modify the state from initial state
    this.setState({
      customer: obj.target.value,
    });
  };
  processProduct = (obj) => {
      this.setState({
          product:obj.target.value
      })
  };
  processVendor = (obj) => {
      this.setState({
          vendor:obj.target.value
      })
  };
  processSales = (obj) => {
      this.setState({
          sales:obj.target.value
      })
  };
  processIncome = (obj) => {
      this.setState({
        income: obj.target.value,
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="row">
              <div className="col-md-3 mt-4">
                <label>Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processCustomer}
                />
              </div>
              <div className="col-md-3 mt-4">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processProduct}
                />
              </div>
              <div className="col-md-3 mt-4">
                <label>Vendor Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processVendor}
                />
              </div>
              <div className="col-md-3 mt-4">
                <label>Sales Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processSales}
                />
              </div>
              <div className="col-md-3 mt-4">
                <label>Income</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.processIncome}
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <h2 className="text-center text-primary ">
                  Dashboard of 2010 Sales
                </h2>
              </div>
              <div className="col-md-4">
                <div className="card bg-primary text-white">
                  <div className="card-body">
                    <label>Customer Name</label>
                    <p>{this.state.customer}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-success text-white">
                  <div className="card-body">
                    <label>Product Name</label>
                    <p>{this.state.product}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-danger text-white">
                  <div className="card-body">
                    <label>Vendor Name</label>
                    <p>{this.state.vendor}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card bg-warning text-white">
                  <div className="card-body">
                    <label>Sales</label>
                    <p>{this.state.sales}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-secondary text-white">
                  <div className="card-body">
                    <label>Income</label>
                    <p>{this.state.income}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StateFive;

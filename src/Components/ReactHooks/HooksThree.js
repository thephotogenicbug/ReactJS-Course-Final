import React, { useState } from "react";

const HooksThree = () => {
  const [city, updateCity] = useState(["Bangalore", "Chennai", "Mumbai"]);
  const [message, updateMessage] = useState();
  const [newcity, processCity] = useState();

  const AddCity = () => {
    updateCity((city) => [...city, newcity]);
    updateMessage(newcity + " Add Successfully");
    processCity("");
  };

  const DeleteCity = (index) => {
      city.splice(index, 1)
      updateCity(city => [...city]);
      updateMessage(" Deleted Successfully");

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>Array Read and Write using Hooks</h3>
          <h4>List of Cities : {city.length}</h4>
          <h3 className="text-success">{message}</h3>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add New City"
            value={newcity}
            onChange={(obj) => processCity(obj.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" onClick={AddCity}>
            Add City
          </button>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      </div>
      <div className="row text-center p-3 mt-3">
        {city.map((xcity, index) => {
          return (
            <div className="col-md-3" key={index}>
              <p className="p-3 border">{xcity}</p>
              <button className="btn btn-danger" onClick={DeleteCity}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HooksThree;

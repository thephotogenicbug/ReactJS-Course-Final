import React, { useState, useEffect } from "react";
import axios from "axios";
const HooksAPIOne = () => {
  const [name, processName] = useState("");
  const [email, processEmail] = useState("");
  const [message, processMessage] = useState("");
  const [Message, updateMessage] = useState("");

  const saveData = () => {
    var url = "http://localhost:4000/v1/newuser";
    var input = { name: name, email: email, message: message };
    console.log(input);
    axios.post(url, input).then((response) => {
      updateMessage(response.data.message);
      processName("");
      processEmail("");
      processMessage("");
    });
  };

  const [userdata, updateUserData] = useState([]);

  const fetchData = () => {
    var url = "http://localhost:4000/v1/readuser";
    fetch(url)
      .then((response) => response.json())
      .then((alldata) => updateUserData(alldata));
  };

  useEffect(() => {
    fetchData();
  }, [userdata]);

  const [deletedata, updateDelete] = useState("");

  const deleteData = (id) => {
    var url = `http://localhost:4000/v1/deleteuser/${id}`;
    axios.delete(url).then((response) => {
       updateDelete(response.data.message)
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4>API USING HOOK METHOD</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 border p-4 bg-light">
          <p className="text-center text-success">{Message}</p>
          <div className="input form-group">
            <label>FullName</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => processName(e.target.value)}
              value={name}
            />
          </div>
          <div className="input form-group">
            <label>Email ID</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => processEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input form-group">
            <label>Message</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => processMessage(e.target.value)}
              value={message}
            />
          </div>
          <br />
          <button className="btn btn-success" onClick={saveData}>
            Save
          </button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <p className="text-center text-danger">{deletedata}</p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email ID</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((userlist, index) => {
                return (
                  <tr key={index}>
                    <td>{userlist.name}</td>
                    <td>{userlist.email}</td>
                    <td>{userlist.message}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteData(userlist._id)}
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
};
export default HooksAPIOne;

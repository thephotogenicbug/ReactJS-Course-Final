import React, { useEffect, useState } from "react";

const HooksFour = () => {
  const [user, updateUser] = useState([]);

//   Here we are fetching a JSON file across the network and printing it to the console. 
//   The simplest use of fetch() takes one argument — the path to the resource you want to fetch 
//   and does not directly return the JSON response body but instead returns a promise that 
//   resolves with a Response object.
  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => updateUser(result));
  };

//   The Response object, in turn, does not directly contain the actual JSON response body 
//   but is instead a representation of the entire HTTP response. So, to extract the JSON body 
//   content from the Response object, we use the json() method, which returns a second promise 
//   that resolves with the result of parsing the response body text as JSON.

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>React Hooks Example using useEffect</h3>
          <p>{user.length}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            <li className="list-group-item active">Customer List</li>
            {user.map((xuser, index) => {
              return (
                <li className="list-group-item" key={index}>
                   <p>{xuser.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HooksFour;

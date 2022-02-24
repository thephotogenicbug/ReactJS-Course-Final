import React, { useState } from "react";

const HooksOne = () => {
  const [button, setButton] = useState("");

  const onPress = () => {
    setButton("Add");
    console.log({ button });
  };

  const onDelete = () => {
    setButton("Delete");
    console.log({ button });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>React Hooks Example One</h3>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4 p-3">
          <button className="btn btn-success" onClick={() => onPress()}>
            Add
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-danger" onClick={() => onDelete()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default HooksOne;

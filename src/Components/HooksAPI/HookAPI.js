import React, { useState, useEffect } from "react";
import "./test.css";
import axios from "axios";
const API = () => {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [newFoodName, setNewFoodName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addToList = (e) => {
    e.preventDefault();
    //    console.log(foodName + days)
    axios.post("http://localhost:4000/insert", {
      foodName: foodName,
      days: days,
    });
    setFoodName("");
    setDays("");
  };

  const updateFood = (id) => {
    axios.put("http://localhost:4000/update", {
      id: id,
      newFoodName: newFoodName,
    });
  };

  const deleteFood = (id) =>{
    axios.delete(`http://localhost:4000/delete/${id}`, {
      
    });
  }

  return (
    <div className="App">
      <h1>CURD API WITH MERN</h1>
      <label>Food Name</label>
      <input type="text" onChange={(e) => setFoodName(e.target.value)} />
      <label>Days Since You Ate</label>
      <input type="number" onChange={(e) => setDays(e.target.value)} />
      <button onClick={addToList}>Add To List</button>
      <hr />
      <h5>FoodList</h5>
      {foodList.map((val, key) => {
        return (
          <div key={key} className="border p-5 m-3">
            <h3>{val.foodName}</h3>
            <h3>{val.daysSinceIAte}</h3>
            <input
              type="text"
              placeholder="New Food Name....."
              onChange={(e) => setNewFoodName(e.target.value)}
            />
            <button onClick={() => updateFood(val._id)}>Update List</button>
            <br />
            <button onClick={() => deleteFood(val._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default API;

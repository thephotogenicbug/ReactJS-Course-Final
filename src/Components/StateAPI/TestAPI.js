import axios from "axios";
import React, { useEffect, useState } from "react";

const TestAPI = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    var url = "https://course-data-api.herokuapp.com/api/v1/courses";
    axios.get(url).then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>{data.length}</div>;
};

export default TestAPI;

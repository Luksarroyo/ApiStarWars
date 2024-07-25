import React from "react";
import Home from "./Home";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeContainer = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    let data = axios.get("https://swapi.dev/api/films");
    // data.then (res => console.log(res.data))

    data.then((res) => setLista(res.data.results));
    data.catch((err) => console.log(err));
  }, []);

  return <Home lista={lista} />;
};

export default HomeContainer;

import React from "react";
import Home from "./Home";
// import axios from "axios";
import { useState, useEffect } from "react";

const HomeContainer = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then((data) => {
        setLista(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return <Home lista={lista} />;
};

export default HomeContainer;

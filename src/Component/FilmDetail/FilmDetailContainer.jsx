import React, { useEffect, useState } from "react";
import FilmDetail from "./FilmDetail";
// import { useParams } from "react-router-dom";

const FilmDetailContainer = () => {
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then((data) => {
        setFilm(data.results.episode_id);
      })
      .catch((err) => console.log(err));
  }, []);

  return <FilmDetail film={film} />;
};

export default FilmDetailContainer;

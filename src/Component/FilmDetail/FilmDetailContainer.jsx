import React, { useEffect, useState } from "react";
import FilmDetail from "./FilmDetail";
import { useParams } from "react-router-dom";

const FilmDetailContainer = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then((data) => {
        const idEncontrada = data.results.find(
          (prod) => prod.episode_id === parseInt(id)
        );
        setFilm(idEncontrada);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <FilmDetail film={film} />;
};

export default FilmDetailContainer;

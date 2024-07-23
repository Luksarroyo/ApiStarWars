
import React, { useEffect, useState } from 'react';
import FilmDetail from './FilmDetail';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FilmDetailContainer = () => {
    const [film, setFilm] = useState(null);
    const {id} = useParams()
      useEffect (() => {
        const fetchData = () => {
            let res = axios.get("https://swapi.dev/api/films");
            res
              .then((res) => {
                const filmEncontrado = res.data.results.find((prod) => prod.episode_id === parseInt(id));
                setFilm(filmEncontrado);
              })
              .catch((err) => console.log(err));
          };
      
          fetchData();
        }, [id]);
  return (
    <FilmDetail film={film}/>
  )
}

export default FilmDetailContainer
import React from "react";
import style from "./FilmDetail.module.css";

const FilmDetail = ({ film }) => {
  if (!film || Object.keys(film).length === 0) return <div>Loading...</div>;
  return (
    <div>
      <div className={style.box}>
        <h1>{film.title}</h1>
        <p>Episode: {film.episode_id}</p>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <p>Release Date: {film.release_date}</p>
        <p>Description: {film.opening_crawl}</p>
      </div>
    </div>
  );
};

export default FilmDetail;

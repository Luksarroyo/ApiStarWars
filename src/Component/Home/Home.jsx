import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = ({ lista }) => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1 className={style.title}>Películas de Star Wars</h1>
        {lista.map((elemento) => (
          <div className={style.bottom} key={elemento.episode_id}>
            <Link
              className={style.link}
              to={`/filmDetail/${elemento.episode_id}`}
            >
              <h2 className={style.film}>{elemento.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

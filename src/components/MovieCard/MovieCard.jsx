import "./MovieCard.css";

import { BsCalendar2Date, BsStarHalf } from "react-icons/bs";

const imgURL = import.meta.env.VITE_IMG;

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={imgURL + movie.poster_path}
        alt={movie.title}
      />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-popularity flex">
        <span className="icon">
          <BsStarHalf />
        </span>
        <span className="stats">{movie.vote_average.toFixed(1)}</span>
      </p>
      <p className="movie-date flex">
        <span className="icon">
          <BsCalendar2Date />
        </span>
        <span className="stats">{movie.release_date}</span>
      </p>
    </div>
  );
}

export default MovieCard;

import "./MovieCard.css";

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
      <p className="movie-popularity">{movie.popularity.toFixed(2)}</p>
      <p className="movie-date">{movie.release_date}</p>
    </div>
  );
}

export default MovieCard;

import "./MovieCard.css";

const imgURL = import.meta.env.VITE_IMG;

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={imgURL + movie.poster_path} alt={movie.title} />
      <h3 className="movie-title">{movie.title}</h3>
    </div>
  );
}

export default MovieCard;

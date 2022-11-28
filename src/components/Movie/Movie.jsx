import "./Movie.css";

const Movie = ({ movie }) => {
  const {
    crew,
    imDbRating,
    imDbRatingCount,
    image,
    rank,
    title,
    year,
  } = movie;

  return <div className="movie">
    <h1>{rank}</h1>
    <img src={image} alt={`${title} poster`} />
    <div className="movie-middle-container">
      <h3>{`${title}, ${year}`}</h3>
      <span className="movie-createdBy">{`Created by: ${crew}`}</span>
    </div>
    <div className="movie-right-container">
      <h3>{imDbRating}</h3>
      <span>({imDbRatingCount})</span>
    </div>
  </div>;
};

export default Movie;

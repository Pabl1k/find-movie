import { GetMoviesAPI } from "./api";
import Movie from "./components/Movie/Movie";
import Sorting from "./components/Sorting/Sorting";

const App = () => {
  const data = GetMoviesAPI();

  return (
    <div className="app">
      <h1>Find your movie...</h1>
      <Sorting />
      <div>
        {data.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;

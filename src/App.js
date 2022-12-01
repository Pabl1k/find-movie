import { useState } from "react";
import Movie from "./components/Movie/Movie";
import Filters from "./components/Filters/Filters";
import { useMovie } from "./hooks/useMovie";

const initialFilters = {
  keyword: null,
  director: null,
  rank: {
    from: null,
    to: null,
  },
  year: {
    from: null,
    to: null,
  },
  rating: {
    from: null,
    to: null,
  },
};

const App = () => {
  const [filters, setFilters] = useState(initialFilters);
  const { list, clearMovieFilters, applyFilters } = useMovie(filters);

  const clearFilters = () => {
    clearMovieFilters();
    setFilters(initialFilters);
  };

  return (
    <div className="app">
      <h1>Find your movie...</h1>
      <Filters
        filters={filters}
        setFilters={setFilters}
        onClearHandler={clearFilters}
        onFilterHandler={applyFilters}
      />
      <div>
        {list.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;

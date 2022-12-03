import { useState } from "react";
import { Functor, isIncludes, pipe, range } from "../functions/functions";
import { MoviesList } from "../api/moviesList";

const initialState = MoviesList;

export const useMovie = (filters) => {
  const [state, setState] = useState(initialState);

  const onClearFilters = () => {
    setState(initialState);
  };

  const filterTitle = (data) => {
    if (!filters.keyword) {
      return data;
    }

    return Functor([]).out((movies) => {
      Functor(data).out((x) => {
        const Mapper = (movie) =>
          isIncludes(movie.title, filters.keyword) && movies.push(movie);
        x.map(Mapper);
      });

      return movies;
    });
  };

  const filterCrew = (data) => {
    if (!filters.crew) {
      return data;
    }

    return Functor([]).out((movies) => {
      Functor(data).out((x) => {
        x.map((movie) => {
          if (isIncludes(movie.crew, filters.crew)) {
            movies.push(movie);
          }
        });
      });

      return movies;
    });
  };

  const filterRank = (data) => {
    return range(data, "rank", filters.rank.from, filters.rank.to);
  };

  const filterYear = (data) => {
    return range(data, "year", filters.year.from, filters.year.to);
  };

  const filterRating = (data) => {
    return range(data, "imDbRating", filters.rating.from, filters.rating.to);
  };

  const onApply = () => {
    pipe(
      filterTitle,
      filterCrew,
      filterRank,
      filterYear,
      filterRating,
      setState
    )(state);
  };

  return {
    list: state,
    clearMovieFilters: onClearFilters,
    applyFilters: onApply,
  };
};

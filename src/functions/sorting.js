import { Functor } from "./functions";

const isIncludes = (where, value) => {
  return where.toLowerCase().includes(value.toLowerCase());
};

export const titleKeyword = (data, word) => {
  if (!word) {
    return data;
  }
  // return data.filter((x) => x.title.toLowerCase().includes(word.toLowerCase()));

  return Functor([]).out((movies) => {
    Functor(data).out((x) => {
      const Mapper = (movie) =>
        isIncludes(movie.title, word) && movies.push(movie);
      x.map(Mapper);
    });

    return movies;
  });
};

export const createdBy = (data, value) => {
  if (!value) {
    return data;
  }
  // return data.filter((x) => x.crew.toLowerCase().includes(value.toLowerCase()));

  return Functor([]).out((movies) => {
    Functor(data).out((x) => {
      x.map((movie) => {
        if (isIncludes(movie.crew, value)) {
          movies.push(movie);
        }
      });
    });

    return movies;
  });
};

const range = (data, key, from, to) => {
  if (!from && !to) {
    return data;
  }
  if (!from) {
    return data.filter((movie) => movie[key] <= to);
  }
  if (!to) {
    return data.filter((movie) => movie[key] >= from);
  }

  return data.filter((movie) => {
    return movie[key] >= from && movie[key] <= to
  });
};

export const rank = (data, from, to) => range(data, "rank", from, to);

export const year = (data, from, to) => range(data, "year", from, to);

export const rating = (data, from, to) => range(data, "imDbRating", from, to);

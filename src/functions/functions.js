export const Functor = (v) => ({
  map: (f) => Functor(f(v)),
  out: (f) => f(v),
});

export const pipe = (...fns) => {
  return (x) => fns.reduce((v, f) => f(v), x);
};

export const isIncludes = (where, value) => {
  return where.toLowerCase().includes(value.toLowerCase());
};

export const range = (data, key, from, to) => {
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
    return movie[key] >= from && movie[key] <= to;
  });
};

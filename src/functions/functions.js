export const Functor = (v) => ({
  map: (f) => Functor(f(v)),
  out: (f) => f(v),
});

export const pipe = (...fns) => {
  return (x) => fns.reduce((v, f) => f(v), x);
};

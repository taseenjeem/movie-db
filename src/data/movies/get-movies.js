export const getMovies = async () => {
  return import("./movies.json").then((module) => module.default);
};

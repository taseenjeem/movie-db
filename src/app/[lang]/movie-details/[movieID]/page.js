import MovieDetails from "@/components/page/movie-details/MovieDetails";
import { getAllMovies } from "@/lib/movie-data";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return getAllMovies.map((item) => ({
    movieID: item.id,
  }));
};

const MovieDetailsPage = ({ params }) => {
  const movieExists = getAllMovies.some((movie) => movie.id === params.movieID);

  if (!movieExists) {
    return notFound();
  }

  return <MovieDetails movieId={params?.movieID} language={params?.lang} />;
};

export default MovieDetailsPage;

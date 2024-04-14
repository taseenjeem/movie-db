import MovieCard from "@/components/global/cards/MovieCard";
import { getMovies } from "@/data/movies/get-movies";

const LandingPage = async ({ params }) => {
  const movies = await getMovies();

  return (
    <section className="min-h-screen">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} language={params?.lang} />
        ))}
      </div>
    </section>
  );
};

export default LandingPage;

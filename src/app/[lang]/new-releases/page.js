import MovieCard from "@/components/global/cards/MovieCard";
import { getMovies } from "@/data/movies/get-movies";

const NewReleasesPage = async ({ params }) => {
  const movies = await getMovies();

  const lastThreeMovies = movies.slice(-Math.min(3, movies.length));

  return (
    <section className="min-h-screen">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {lastThreeMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} language={params?.lang} />
        ))}
      </div>
    </section>
  );
};

export default NewReleasesPage;

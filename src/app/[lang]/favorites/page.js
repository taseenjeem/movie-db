import FavMovies from "@/components/page/favorite-movies/FavMovies";

const FavoritesPage = ({ params }) => {
  return (
    <section className="min-h-screen">
      <FavMovies params={params} />
    </section>
  );
};

export default FavoritesPage;

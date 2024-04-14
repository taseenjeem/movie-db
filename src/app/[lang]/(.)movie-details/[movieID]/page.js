import Modal from "@/components/global/modal/Modal";
import MovieDetails from "@/components/page/movie-details/MovieDetails";

const InterceptingMovieDetailsPage = ({ params }) => {
  return (
    <Modal>
      <MovieDetails movieId={params.movieID} language={params.lang} />
    </Modal>
  );
};

export default InterceptingMovieDetailsPage;

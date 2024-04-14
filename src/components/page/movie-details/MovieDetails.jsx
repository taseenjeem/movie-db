import Image from "next/image";
import { getMovies } from "@/data/movies/get-movies";
import { getDictionary } from "@/data/dictionary/dictionaries";
import AddToFav from "./AddToFav";
import AddToWatchLater from "./AddToWatchLater";
import { CiStreamOn } from "react-icons/ci";
import { IoMdCloudDownload } from "react-icons/io";

const MovieDetails = async ({ movieId, language }) => {
  const dictionary = await getDictionary(language);
  const movies = await getMovies();

  const matchedMovie = movies.find((movie) => movie.id === movieId);

  return (
    <>
      <section>
        <div>
          <Image
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={matchedMovie?.backdrop_path}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <Image
              src={matchedMovie?.poster_path}
              width={100}
              height={100}
              className="w-full"
              alt=""
            />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold dark:text-slate-300 text-2xl">
              {matchedMovie?.original_title}
            </h2>
            <p className="my-2 dark:text-slate-400 italic">
              {matchedMovie?.overview}
            </p>
            <ul className="dark:text-slate-300 space-y-2 my-8">
              <li>
                {dictionary.movie_details.releases_date} :{" "}
                {matchedMovie?.release_date}
              </li>
              <li>
                {dictionary.movie_details.average_vote} :{" "}
                {matchedMovie?.vote_average}
              </li>
              <li>
                {dictionary.movie_details.vote_count} :{" "}
                {matchedMovie?.vote_count}
              </li>
              <li>
                {dictionary.movie_details.popularity} :{" "}
                {matchedMovie?.popularity}
              </li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md flex items-center justify-center gap-2">
              <CiStreamOn className="size-5" />
              {dictionary.movie_details.stream}
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md flex items-center justify-center gap-2">
              <IoMdCloudDownload className="size-5" />
              {dictionary.movie_details.download}
            </button>
            <AddToFav dictionary={dictionary} movieData={matchedMovie} />
            <AddToWatchLater dictionary={dictionary} movieData={matchedMovie} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;

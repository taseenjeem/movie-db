import { getDictionary } from "@/data/dictionary/dictionaries";
import { genre } from "@/data/movies/genre-details";
import Image from "next/image";
import Link from "next/link";
import { IoTicketOutline, IoStar } from "react-icons/io5";

const MovieCard = async ({ movie, language }) => {
  const dictionary = await getDictionary(language);
  const genres = movie?.genre_ids?.map((id) => genre[id]);

  return (
    <>
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <Image
          className="w-full object-cover"
          src={movie?.poster_path}
          alt=""
          width={100}
          height={100}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie?.original_title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{genres?.join("/")}</p>
          <div className="flex items-center space-x-1 mb-5">
            <IoStar className="text-primary size-4" />
            <IoStar className="text-primary size-4" />
            <IoStar className="text-primary size-4" />
            <IoStar className="text-primary size-4" />
            <IoStar className="text-primary size-4" />
          </div>
          <Link
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href={`/movie-details/${movie?.id}`}
          >
            <IoTicketOutline className="w-5 h-auto" />
            <span>{dictionary.movie_card.details}</span>
          </Link>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;

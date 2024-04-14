"use client";
import { useEffect, useState } from "react";
import MovieCard from "../../global/cards/MovieCard";
import { TbMoodSadSquint } from "react-icons/tb";

const FavMovies = ({ params }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem("favoriteMovies");
    if (storedMovies) {
      setFavoriteMovies(JSON.parse(storedMovies));
    }
  }, []);

  return (
    <>
      {favoriteMovies.length <= 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[70vh]">
          <TbMoodSadSquint className="size-40 mb-10" />
          <h3 className="text-2xl">
            Sorry, you did not marked any movie as favorite!
          </h3>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} language={params?.lang} />
          ))}
        </div>
      )}
    </>
  );
};

export default FavMovies;

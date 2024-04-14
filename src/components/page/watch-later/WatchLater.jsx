"use client";
import { useEffect, useState } from "react";
import { TbMoodSadSquint } from "react-icons/tb";
import MovieCard from "../../global/cards/MovieCard";

const WatchLater = ({ params }) => {
  const [watchLater, setWatchLater] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem("watchLaterMovies");
    if (storedMovies) {
      setWatchLater(JSON.parse(storedMovies));
    }
  }, []);

  return (
    <>
      {watchLater.length <= 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[70vh]">
          <TbMoodSadSquint className="size-40 mb-10" />
          <h3 className="text-2xl">
            Sorry, you did not marked any movie as watch later!
          </h3>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {watchLater.map((movie) => (
            <MovieCard key={movie.id} movie={movie} language={params?.lang} />
          ))}
        </div>
      )}
    </>
  );
};

export default WatchLater;

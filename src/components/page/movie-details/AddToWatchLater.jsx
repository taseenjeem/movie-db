"use client";
import { useEffect, useState } from "react";
import { MdWatchLater } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { toast } from "react-toastify";

const AddToWatchLater = ({ dictionary, movieData }) => {
  const [isAddedToWatchLater, setIsAddedToWatchLater] = useState(false);

  // Check if the movie is already added to watch later
  const checkIfAddedToWatchLater = () => {
    const storedMovies =
      JSON.parse(localStorage.getItem("watchLaterMovies")) || [];
    return storedMovies.some((movie) => movie.id === movieData.id);
  };

  // Toggle adding/removing movie from watch later
  const toggleWatchLater = () => {
    if (isAddedToWatchLater) {
      removeFromWatchLater();
    } else {
      addToWatchLater();
    }
  };

  // Add movie to watch later
  const addToWatchLater = () => {
    const storedMovies =
      JSON.parse(localStorage.getItem("watchLaterMovies")) || [];
    storedMovies.push(movieData);
    localStorage.setItem("watchLaterMovies", JSON.stringify(storedMovies));
    setIsAddedToWatchLater(true);
    toast.success("Added to Watch Later!", {
      position: "top-center",
      theme: "colored",
    });
  };

  // Remove movie from watch later
  const removeFromWatchLater = () => {
    let storedMovies =
      JSON.parse(localStorage.getItem("watchLaterMovies")) || [];
    storedMovies = storedMovies.filter((movie) => movie.id !== movieData.id);
    localStorage.setItem("watchLaterMovies", JSON.stringify(storedMovies));
    setIsAddedToWatchLater(false);
    toast.warning("Removed from Watch Later!", {
      position: "top-center",
      theme: "colored",
    });
  };

  // Check if movie is already added to watch later on component mount
  useEffect(() => {
    setIsAddedToWatchLater(checkIfAddedToWatchLater());
  }, []);

  return (
    <button
      className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md flex items-center justify-center gap-2"
      onClick={toggleWatchLater}
    >
      {isAddedToWatchLater ? (
        <IoMdRemoveCircle className="size-5 text-red-500" />
      ) : (
        <MdWatchLater className="size-5" />
      )}
      {isAddedToWatchLater
        ? dictionary.movie_details.watch_later_remove
        : dictionary.movie_details.watch_later}
    </button>
  );
};

export default AddToWatchLater;

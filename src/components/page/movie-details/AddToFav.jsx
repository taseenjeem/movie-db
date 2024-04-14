"use client";
import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { toast } from "react-toastify";

const AddToFav = ({ dictionary, movieData }) => {
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  console.log(movieData);

  // Check if the movie is already added to favorites
  const checkIfAddedToFav = () => {
    const storedMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    return storedMovies.some((movie) => movie.id === movieData.id);
  };

  // Toggle adding/removing movie from favorites
  const toggleFavorite = () => {
    if (isAddedToFav) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  // Add movie to favorites
  const addFavorite = () => {
    const storedMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    storedMovies.push(movieData);
    localStorage.setItem("favoriteMovies", JSON.stringify(storedMovies));
    setIsAddedToFav(true);
    toast.success("Marked as favorite!", {
      position: "top-center",
      theme: "colored",
    });
  };

  // Remove movie from favorites
  const removeFavorite = () => {
    let storedMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    storedMovies = storedMovies.filter((movie) => movie.id !== movieData.id);
    localStorage.setItem("favoriteMovies", JSON.stringify(storedMovies));
    setIsAddedToFav(false);
    toast.warning("Removed from favorite!", {
      position: "top-center",
      theme: "colored",
    });
  };

  // Check if movie is already added to favorites on component mount
  useEffect(() => {
    setIsAddedToFav(checkIfAddedToFav());
  }, []);

  return (
    <button
      className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md flex items-center justify-center gap-2"
      onClick={toggleFavorite}
    >
      {isAddedToFav ? (
        <MdFavorite className="size-5 text-red-500" />
      ) : (
        <MdFavorite className="size-5" />
      )}
      {isAddedToFav
        ? dictionary.movie_details.remove_fav
        : dictionary.movie_details.fav}
    </button>
  );
};

export default AddToFav;

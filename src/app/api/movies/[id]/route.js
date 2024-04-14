import { getAllMovies } from "@/lib/movie-data";
import { NextResponse } from "next/server";

export const GET = async (_request, { params }) => {
  const data = await getAllMovies.find((movie) => movie.id === params.id);
  return NextResponse.json(data);
};

export const PATCH = async (request, { params }) => {
  const newData = await request.json();
  const movieIndex = getAllMovies.findIndex((movie) => movie.id === params.id);
  getAllMovies[movieIndex].title = newData.title;

  return NextResponse.json(getAllMovies[movieIndex]);
};

export const DELETE = async (_request, { params }) => {
  const movieIndex = getAllMovies.findIndex((movie) => movie.id === params.id);
  getAllMovies.splice(movieIndex, 1);
  const movieToDelete = getAllMovies[movieIndex];

  return NextResponse.json(movieToDelete);
};

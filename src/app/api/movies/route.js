import { getAllMovies } from "@/lib/movie-data";
import { NextResponse } from "next/server";

export const GET = async () => {
  const data = await getAllMovies;
  return NextResponse.json(data);
};

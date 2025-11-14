import Header from "@/conponements/header";
import { getMovie } from "@/lib/movies";
import Image from "next/image";

export default async function Page() {
  const data = await getMovie();
  const movies = data?.Search ?? [];

  return (
    <div>
      <Header />
      {movies.map(
        (movie: { imdbID: string; Title: string; Poster: string }) => (
          <div key={movie.imdbID} className="border">
            <h1>{movie.Title}</h1>
            <Image src={movie.Poster} alt={movie.Title} />
          </div>
        )
      )}
    </div>
  );
}

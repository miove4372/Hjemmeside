import Header from "@/conponements/header";
import { getMovie } from "@/lib/movies";

export default async function () {
  const data = await getMovie();
  const movies = data.Search;

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.imdbID} className="border">
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        );
      })}
    </div>
  );
}

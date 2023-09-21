import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchDataComedy } from "../helpers/fetchData";

const Comedy = () => {
  const imgBaseUrl = "http://image.tmdb.org/t/p/w185";
  const query = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => fetchDataComedy(),
  });

  return (
    <main className="page-main">
    <div className="genre-page">
      <div className="movie-card">
        <Link>
          {query.data &&
            query.data.results.map((movie) => (
              <img
                key={movie.id}
                src={`${imgBaseUrl}${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
        </Link>
      </div>
    </div>
    </main>
  );
};

export default Comedy;

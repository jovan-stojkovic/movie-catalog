import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchDataTopRated } from "../helpers/fetchData";

const TopRated = () => {
  const imgBaseUrl = "http://image.tmdb.org/t/p/w185";
  const query = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => fetchDataTopRated(),
  });

  return (
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
  );
};

export default TopRated;

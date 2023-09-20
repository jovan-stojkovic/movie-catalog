import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

export const fetchData = async () => {
  const apiUrl = `http://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=28`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const Action = () => {
  const query = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => fetchData(),
  });

  const imgBaseUrl = "http://image.tmdb.org/t/p/w185";

  return (
    <div className="page">
      <div className="container">
        <Link>
          <div className="img">
            {query.data &&
              query.data.results.map((movie) => (
                <img
                  key={movie.id}
                  src={`${imgBaseUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
              ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Action;

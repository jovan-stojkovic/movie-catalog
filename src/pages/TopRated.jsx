import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/page.scss"; 


export const fetchData = async () => {
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const TopRated = () => {
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

export default TopRated;

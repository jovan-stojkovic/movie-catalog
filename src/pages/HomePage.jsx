import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchDataHome } from "../helpers/fetchData";
import "../styles/pages.scss";

const HomePage = () => {
  const imgBaseUrl = "http://image.tmdb.org/t/p/w185";
  const query = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => fetchDataHome(),
  });

  return (
    <>
      <div className="padd"></div>
      <Link className="page">
        {query.data &&
          query.data.results.map((movie) => (
            <img
              key={movie.id}
              src={`${imgBaseUrl}${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
      </Link>
      <Link className="page">
        {query.data &&
          query.data.results.map((movie) => (
            <img
              key={movie.id}
              src={`${imgBaseUrl}${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
      </Link>
    </>
  );
};

export default HomePage;
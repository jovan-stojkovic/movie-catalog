import { fetchData } from "../helpers/fetchData";
import { useQuery } from "@tanstack/react-query";

const Horror = () => {
  const genre = "horror";
  const query = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => fetchData(),
  });

  return (
    <div>
      {query.data &&
        query.data.results.map((movie) => <div> {movie.title}</div>)}
    </div>
  );
};

export default Horror;
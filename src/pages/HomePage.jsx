import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const genre = "popular"
  const getData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${genre}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    const data = await res.json();

    return data;
  };

  const query = useQuery({
    queryKey: ["allMovies"],
    queryFn: getData,
  });

  return (
    <main className="main-container">
      <div className="home-page-container">
        {query.data && query.data.results.map((movie) => (
          <div> {movie.title}</div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;

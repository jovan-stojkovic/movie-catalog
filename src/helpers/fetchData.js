import axios from "axios";

export const fetchData = async () => {
  const genre = "top_rated";
  const apiUrl = `https://api.themoviedb.org/3/movie/${genre}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

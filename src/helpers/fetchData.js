import axios from "axios";

export const fetchDataHome = async () => {
  const apiUrlHome =
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  try {
    const response = await axios.get(apiUrlHome);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDataTopRated = async () => {
  const apiUrlTopRated =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  try {
    const response = await axios.get(apiUrlTopRated);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDataAction = async () => {
  const apiUrlAction =
    "http://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=28 ";

  try {
    const response = await axios.get(apiUrlAction);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDataComedy = async () => {
  const apiUrlComedy =
    "http://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=35 ";

  try {
    const response = await axios.get(apiUrlComedy);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDataDocumentaries = async () => {
  const apiUrlDocumentaries =
    "http://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=99";

  try {
    const response = await axios.get(apiUrlDocumentaries);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDataHorror = async () => {
  const apiUrlHorror =
    "http://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=27";

  try {
    const response = await axios.get(apiUrlHorror);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDataRomance = async () => {
  const apiUrlRomance =
    "http://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_genres=10749";

  try {
    const response = await axios.get(apiUrlRomance);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

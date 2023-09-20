import { useEffect } from "react";
import { useState } from "react";
import requests from "../helpers/requests";
import axios from "../helpers/axios";

useState;

const HomePage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    console.log(movie);;
    fetchData();
  }, [])}

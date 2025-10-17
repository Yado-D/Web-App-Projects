import React, { useEffect, useState, rowRef } from "react";
import "./row.css";
import sample_banner from "../../../assets/images/sample_banner.webp";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

export const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || movie.title).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));

          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  }

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error is : ", error);
      }
    })();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

  return (
    <div className="row_outer_container">
      <h1>{title}</h1>
      <div className="row_inner_container">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            style={{
              width: isLarge ? "200px" : "170px",
              height: isLarge ? "200px" : "200px",
            }}
            className="row_image"
            index={index}
            src={`${baseUrl}${
              isLarge ? movie?.poster_path : movie.backdrop_path
            }`}
            alt=""
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

import React from "react";
import sample_banner from "../../assets/images/sample_banner.webp";
import "./banner.css";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

export function BANNER() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchTrending);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        console.log("Movies are : ",movie);
      } catch (error) {
        console.log("error", error);
      }
    })();
  },[]);

  function truncate(value,num){
     return value?.length > num ? value.substr(0,num)+'...' : value;
  }
  return (
    <div className="banner_outer_container">
      <div className="banner_inner_container">
        <img className="banner_image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
        <div className="banner_description">
          <p className="banner_title">{movie.title}</p>
          <div>
            <button className="banner_button1">Play</button>
            <button className="banner_button2">My List</button>
          </div>
          <p className="banner_movie_descri">{truncate(movie.overview,150)}</p>
        </div>
      </div>
    </div>
  );
}

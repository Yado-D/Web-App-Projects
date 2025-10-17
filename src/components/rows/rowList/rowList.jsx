import React from "react";
import { Row } from "../row/row";
import requests from "../../../utils/requests";
import './rowList.css';


export const RowList = () => {
  return (
    <div className="rowslist_outer_container">
      <Row title={"Netflix Originals"} fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
      <Row title={"Trending"} fetchUrl={requests.fetchTrending} isLarge={false} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} isLarge={false} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} isLarge={false} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} isLarge={false} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} isLarge={false} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} isLarge={false} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} isLarge={false} />
      <Row title={"Mystery Movies"} fetchUrl={requests.fetchDocumentaries} isLarge={false} />
      <Row title={"Sci Fi Movies"} fetchUrl={requests.fetchSciFiMovies} isLarge={false} />
      <Row title={"Western Movies"} fetchUrl={requests.fetchWesternMovies} isLarge={false} />
      <Row title={"Animation Movies"} fetchUrl={requests.fetchActionMovies} isLarge={false} />
      <Row title={"Tv Shows"} fetchUrl={requests.fetchTvShows} isLarge={false} />
      <Row title={"Popular Movies"} fetchUrl={requests.fetchPopularMovies} isLarge={false} />
      <Row title={"Upcomming Movies"} fetchUrl={requests.fetchUpcomingMovies} isLarge={false} />
      <Row title={"Now Playing Movies"} fetchUrl={requests.fetchNowPlayingMovies} isLarge={false} />

    </div>
  );
};

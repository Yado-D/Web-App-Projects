const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
console.log(REACT_APP_API_KEY);

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}&adult=true&language=en-US&page=1`,
  fetchMovieGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_API_KEY}&adult=true&language=en`,
  fetchDiscover: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_API_KEY}&adult=true&language=en-US&page=1`,
  
  // Genre-specific requests
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=99&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=16&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=878&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchThrillerMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=53&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
   // Your requested categories
  fetchSciFiMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=878&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchWesternMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=37&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchTvShows: `https://api.themoviedb.org/3/discover/tv?api_key=${REACT_APP_API_KEY}&include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  fetchPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&adult=true&language=en-US&page=1`,
  fetchNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_API_KEY}&adult=true&language=en-US&page=1`,
  fetchUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${REACT_APP_API_KEY}&adult=true&language=en-US&page=1`,
  // Netflix Originals
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213&include_adult=true&language=en-US&page=1`
};

export default requests;
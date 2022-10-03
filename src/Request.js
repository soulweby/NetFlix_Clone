// Cle API : ee47b89b75cb56983d4f8026ef0c04af
    
// TheMovieDb: https://api.themoviedb.org/3/movie/550?

const API_KEY = "ee47b89b75cb56983d4f8026ef0c04af";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fectchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default requests;
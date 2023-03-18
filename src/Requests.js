
const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=49b2356e0595776c90a92673409fa866&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=49b2356e0595776c90a92673409fa866&with_netwoks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=49b2356e0595776c90a92673409fa866&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=49b2356e0595776c90a92673409fa866&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=49b2356e0595776c90a92673409fa866&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=49b2356e0595776c90a92673409fa866&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=49b2356e0595776c90a92673409fa866&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=49b2356e0595776c90a92673409fa866&with_genres=99`,
}

export default requests;


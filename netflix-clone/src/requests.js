const API_KEY = "58242a97d515ace25bc8787ac2752f17";

const requests = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchComedy : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchThriller : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
    fetchDrama : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
    fetchHorror : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchAnimation : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
}

export default requests;

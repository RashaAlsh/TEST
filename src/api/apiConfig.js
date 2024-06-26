const api_key = "e63a81fcdf7cb4b04b1713cfb1daa375";

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: api_key,
  image: (posterPath) => `https://image.tmdb.org/t/p/w500/${posterPath}`,
};

export default apiConfig;
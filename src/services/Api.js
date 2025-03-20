const API_KEY="ea67e0897b7ade747a0e82de3fc1370d";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovie=async () => {
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data=await response.json();
    return data.results;
};
export const SearchMovie=async (query) => {
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.results;
};
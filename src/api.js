// src/api.js
// http://www.omdbapi.com/?i=tt0100669&plot=full&r=xml

export const fetchMovies = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=7fd055a6`);
    const data = await response.json();
    return data.Search || [];
};

export const fetchMoviesID = async (ID) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${ID}&apikey=7fd055a6`);
    const data = await response.json();
    console.log(data.Search || [])
    return data.Search || [];

};

export const fetchMovieBooked = async(movie) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=7fd055a6`);
    const data = await response.json();
    console.log(data || []) ;
}
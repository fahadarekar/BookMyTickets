// src/api.js
// http://www.omdbapi.com/?i=tt0100669&plot=full&r=xml

export const fetchMovies = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=7fd055a6`);
    const data = await response.json();
    return data.Search || []; // Return an array of movies
};


export const fetchMoviesID = async (id) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=7fd055a6`);
    const data = await response.json();
    console.log(data); // Add this line to check what the API returns
    return data;
};


/*export const fetchMovieBooked = async(movie) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=7fd055a6`);
    const data = await response.json();
    console.log(data || []) ;
}*/

export const fetchMovieBooked = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=7fd055a6`);
    const data = await response.json();
    console.log(data);
    return data;
};

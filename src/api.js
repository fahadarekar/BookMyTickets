// src/api.js
// http://www.omdbapi.com/?i=tt0100669&plot=full&r=xml

// Fetch Movies function
export const fetchMovies = async (title) => {
    const token = getCookieValue('token')
    console.log("token in line 7", token)
    const response = await fetch(`http://localhost:8089/booking/movie`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Add the Bearer token here
            'Content-Type': 'application    /json',
        },
    });
    const data = await response.json();
    console.log("data in line 16", data)
    return data || []; // Return an array of movies
};

function getCookieValue(cookieName) {
    const name = cookieName + "=";
    const decodedCookies = decodeURIComponent(document.cookie); // Decode in case there are special characters
    const cookiesArray = decodedCookies.split(';'); // Split cookies into an array

    for (let cookie of cookiesArray) {
        cookie = cookie.trim(); // Remove any leading or trailing whitespace
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length); // Return the value of the cookie
        }
    }
    return null; // Return null if the cookie is not found
}


// Fetch Movie IDs function
export const fetchMoviesID = async () => {
    const token = getCookieValue('token')
    const response = await fetch(`http://localhost:8089/booking/movie/ids`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Add the Bearer token here
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log("data in line 46", data); // Add this line to check what the API returns
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

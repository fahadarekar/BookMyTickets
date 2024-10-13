import React, { useState } from 'react';
import { fetchMoviesID } from '../api.js'; // Assuming this fetches by IMDb ID
import '../styles/Feature.css';

import MovieCard from '../components/MovieCard.js';

const Feature = ({ toggleWishlist, wishlist }) => { // Properly destructuring toggleWishlist
    const [searchID, setSearchID] = useState('');
    const [movie, setMovie] = useState({}); // Expecting a single movie object, not an array

    const handleSearch = async () => {
        const fetchedMovie = await fetchMoviesID(searchID);
        console.log("fetchedMovies", fetchedMovie)
        setMovie(fetchedMovie);
    };

    return (
        <div className="container-fluid vh-100 gradient-custom">
            <div className="row mb-4 p-4">
                <label className="text-light text-center h3 mb-3">Enter IMDb ID </label>
                <div className="col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-9 p-0">
                            <input
                                type="text"
                                className="IDinput"
                                placeholder="(e.g., tt0111161)"
                                value={searchID}
                                onChange={(e) => setSearchID(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3 ">
                            <button
                                className="btn btn-primary "
                                onClick={handleSearch} // Updated to handle the search
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 ">
                    {movie.imdbID ? (
                        <MovieCard
                            key={movie.imdbID}
                            Poster={movie.Poster === 'N/A' ? "https://placehold.co/600x400" : movie.Poster}
                            Year={movie.Year}
                            Title={movie.Title}
                            imdbID={movie.imdbID}
                            toggleWishlist={() => toggleWishlist(movie)}
                            isWishlisted={wishlist.some(wishMovie => wishMovie.imdbID === movie.imdbID)}
                        />
                    ) : (
                        <p className="text-light text-center">No Movie Found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Feature;

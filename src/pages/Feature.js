import React, { useState } from 'react';
import { fetchMoviesID, fetchMovies } from '../api.js';
import '../styles/Feature.css'

import MovieCard from '../components/MovieCard.js';

const Feature = (toggleWishlist) => {
    const [searchID, setSearchID] = useState('');
    const [moviesID, setMoviesID] = useState([]);

    return (
        <div className="container-fluid vh-100 gradient-custom">
            <div className=" row mb-4 p-4">
                <label className="text-light text-center h3 mb-2">Enter IMDB ID :</label>
                <div className="col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <input
                                type="text"
                                className=" IDinput"
                                placeholder='...?'
                                value={searchID}
                                onChange={(e) => setSearchID(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <button
                                className="btn btn-primary mt-2"
                                onClick={() => fetchMoviesID(searchID).then(setMoviesID)}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    {
                        moviesID.length > 0 ?(
                            moviesID.map((moviesID) => {(
                                <MovieCard
                                    key={moviesID.imdbID}
                                    Poster={moviesID.Poster === 'N/A' ? "https://placehold.co/600x400" : moviesID.Poster}
                                    Year={moviesID.Year}
                                    Title={moviesID.Title}
                                    toggleWishlist={() => toggleWishlist(moviesID)}
                                    isWishlisted={false}
                                />
                            )}))
                            : (<p className="text-light">No Related Movies ID Found</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feature;

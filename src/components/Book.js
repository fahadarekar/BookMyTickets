import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from '../api'; // Import the utility function
import '../styles/Booking.css';
import BookingModal from './BookingModal';
// Import the MovieCard component
import RelatedMovies from './RelatedMovies';

const Book = () => {
    const location = useLocation();
    const { movie } = location.state || {};

    return (
        <div>
            <div className="gradient-custom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <h1 className="text-center text-primary pt-4 pb-3">Movie</h1>
                            <div className="container">
                                <div className="row-cols-12 row-cols-sm-12 row-cols-md-2 g-5 d-flex justify-content-center align-items-center pb-3 ">
                                    {movie ? (
                                        <div className="col">
                                            <div className="card bg-dark" style={{ borderRadius: '1.5rem', boxShadow: '10px 10px 25px black' }}>
                                                <img
                                                    className="bd-placeholder-img"
                                                    style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
                                                    width="100%"
                                                    height="300px"
                                                    src={movie.Poster === 'N/A' ? "https://placehold.co/600x400" : movie.Poster}
                                                    alt={movie.Title}
                                                    preserveAspectRatio="xMidYMid slice"
                                                    focusable="false"
                                                />
                                                <div className="card-body" style={{ backgroundColor: '#55595' }}>
                                                    <p className="card-text text-light">{movie.Title}</p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="bg-secondary text-light p-1 rounded">
                                                            <small className="px-2">{movie.Year}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="fs-3 text-light">No movie selected for booking</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 p-5">
                            {
                                movie ? (<BookingModal />) : ""
                            }
                        </div>
                    </div>
                    {
                        movie ? (<RelatedMovies movie={movie} />) : ""
                    }

                </div>
            </div>
        </div>
    );
};

export default Book;

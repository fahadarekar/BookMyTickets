import React from 'react';
import { useLocation, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import '../styles/Booking.css';
import BookingModal from './BookingModal';
import RelatedMovies from './RelatedMovies';

const Book = () => {
    const location = useLocation();
    const { movie } = location.state || {};

    // Redirect to home or a different route if no movie is found
    if (!movie) {
        return <Navigate to="/" />; // Redirect to the home page or any fallback route
    }

    return (
        <div>
            <div className="gradient-custom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <h1 className="text-center text-primary m-2">{movie.Title}</h1>
                            <div className="container">
                                <div className="row-cols-12 row-cols-sm-12 row-cols-md-1 pb-3 d-flex justify-content-center align-items-center ">
                                    <div className="col-12 d-flex justify-content-center align-items-center" style={{ borderRadius: '1.5rem', width: '80%' }}>
                                        <img
                                            className="bd-placeholder-img"
                                            style={{ borderRadius: '1.5rem' }}
                                            width="80%"
                                            height="80%"
                                            src={movie.Poster === 'N/A' ? "https://placehold.co/600x400" : movie.Poster}
                                            alt={movie.Title}
                                            preserveAspectRatio="xMidYMid slice"
                                            focusable="false"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 gradient-custom p-4 mt-3 movieDetails mb-3 ">
                            <div className="row g-1 d-flex justify-content-center align-items-center">
                                <div className="col-md-3 bg-warning p-2 m-1 text-dark text-center rounded">IMDB (<span className = "text-danger">{movie.imdbRating}/10</span>)</div>
                                <div className="col-md-4 bg-warning p-2 m-1 text-dark text-center rounded">Votes <span className = "text-danger">{movie.imdbVotes}</span></div>
                                <div className="col-md-4 bg-warning p-2 m-1 text-dark text-center rounded">BoxOffice<span className = "text-danger">{movie.BoxOffice}</span> </div>
                            </div>
                            <p className="text-warning fs-3 p-0 m-0">Plot :</p>
                            <p className="fs-4 text-light">{movie.Plot}</p>
                            <p className="fs-4 text-warning">Released on : <span className="text-light">{movie.Released}</span></p>
                            <p className="fs-4 text-warning">Duration : <span className="text-light">{movie.Runtime}</span></p>
                            <p className="fs-4 text-warning">Genre : <span className="text-light">{movie.Genre}</span></p>
                            <p className="fs-4 text-warning">Director : <span className="text-light">{movie.Director}</span></p>
                            <p className="fs-4 text-warning">Writer : <span className="text-light">{movie.Writer}</span></p>
                            <p className="fs-4 text-warning">Languages : <span className="text-light">{movie.Language}</span></p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 col-sm-12">
                            {movie ? (<BookingModal movie={movie} />) : ""}
                        </div>
                    </div>
                    {movie ? (<RelatedMovies movie={movie} />) : ""}
                </div>
            </div>
        </div>
    );
};

export default Book;

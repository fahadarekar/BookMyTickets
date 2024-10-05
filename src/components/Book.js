import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Booking.css';
import BookingModal from './BookingModal';
import RelatedMovies from './RelatedMovies';

const Book = (toggleWishlist, isWishlisted) => {
    const location = useLocation();
    const { movie } = location.state || {};

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
                                        {/*<div className="card-body" style={{ backgroundColor: '#55595' }}>
                                                    
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="bg-secondary text-light p-2 rounded">
                                                            <small className="px-2">Released : {movie.Released}</small>
                                                        </div>
                                                        <small className = "bg-danger p-2 rounded text-light">{movie.Runtime}</small>
                                                    </div>
                                                </div>*/}

                                    </div>
                                    {/*<p className="fs-3 text-light">No movie selected for booking</p>*/}

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 gradient-custom p-4 mt-3 movieDetails  mb-3 ">
                            <div className="row g-1 d-flex justfify-content-center align-items-center">
                                <div className="col-md-3 bg-warning p-2 m-1 text-dark text-center rounded">IMDB ({movie.imdbRating}/10)</div>
                                <div className="col-md-4 bg-warning p-2 m-1 text-dark text-center rounded">Votes {movie.imdbVotes}</div>
                                <div className="col-md-4 bg-warning p-2 m-1 text-dark text-center rounded">BoxOffice {movie.BoxOffice}</div>

                            </div>
                            <p className="text-warning fs-3 p-0 m-0">Plot :</p>
                            <p className="fs-4 text-light">{movie.Plot}</p>
                            <p className="text-warning fs-4">Released on : <span className="text-light">{movie.Released}</span></p>
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

/*
    {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
    "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
    "Plot": "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
    "Language": "English, Mandarin",
    "Country": "United States, United Kingdom",
    "Awards": "Nominated for 1 Oscar. 15 wins & 79 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "70/100"
        }
    ],
    "Metascore": "70",
    "imdbRating": "8.2",
    "imdbVotes": "1,595,851",
    "imdbID": "tt0372784",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$206,863,479",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
*/
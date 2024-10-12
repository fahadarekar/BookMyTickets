import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/Booking.css';
import BookingModal from './BookingModal';
import RelatedMovies from './RelatedMovies';

const Book = () => {
    const { movieId } = useParams(); // Get the movieId from the URL
    const location = useLocation();
    const { movie } = location.state || []; // Retrieve the movie object passed from Homepage

    console.log("movie line 12", movie);
    
    // Find the selected movie based on movieId
    const selectedMovie = Array.isArray(movie) ? movie.find((m) => m.id === Number(movieId)) : null;

    console.log("Selected Movie:", selectedMovie);


    return (
        <div>
            <div className="gradient-custom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            {selectedMovie ? (
                                <>
                                    <h1 className="text-center text-primary m-2">{selectedMovie.title}</h1>
                                    <div className="container">
                                        <div className="row-cols-12 row-cols-sm-12 row-cols-md-1 pb-3 d-flex justify-content-center align-items-center ">
                                            <div className="col-12 d-flex justify-content-center align-items-center" style={{ borderRadius: '1.5rem', width: '80%' }}>
                                                <img
                                                    className="bd-placeholder-img"
                                                    style={{ borderRadius: '1.5rem' }}
                                                    width="80%"
                                                    height="80%"
                                                    src={selectedMovie.image_url}
                                                    alt={selectedMovie.title}
                                                    preserveAspectRatio="xMidYMid slice"
                                                    focusable="false"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <h1 className="text-center text-danger m-2">Movie not found</h1>
                            )}
                        </div>
                        <div className="col-sm-12 col-md-6 gradient-custom p-4 mt-3 movieDetails mb-3 ">
                            <p>Movie Name: {selectedMovie.title}<br/></p>
                            <p>Description: {selectedMovie.description}<br/></p>
                            <p>Duration: {selectedMovie.duration} minutes<br/></p>
                            <p>Genre: {selectedMovie.genre}</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 col-sm-12">
                            {selectedMovie ? (
                                <BookingModal movie={selectedMovie} />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    {selectedMovie ? <RelatedMovies movie={selectedMovie} /> : ""}
                </div>
            </div>
        </div>
    );
};

export default Book;

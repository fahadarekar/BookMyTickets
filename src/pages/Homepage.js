import React from 'react';
import '../styles/Homepage.css';
import MovieCard from '../components/MovieCard';

const Homepage = ({ movies, toggleWishlist, wishlist }) => {
    return (
        <div>
            <main className="gradient-custom pb-5">
                <section className="py-2 text-center container">
                    <div className="row py-lg-4">
                        <div className="col-lg-6 col-sm-12 mx-auto">
                            <h1 className="fw-dark text-primary">BookMyTickets</h1>
                            <p className="lead text-light">
                                Welcome to our widely popular list of movies to watch in your Theatres. Book Now!!
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary mx-2">Main call to action</a>
                                <a href="#" className="btn btn-secondary mx-2">Secondary action</a>
                            </p>
                        </div>
                    </div>
                </section>
                <div className="album py-2 bg-light gradient-custom">
                    <div className="container-fluid p-5 pt-0">
                        <div className="row row-cols-12 row-cols-1 row-cols-md-4 g-5">
                            {movies.length > 0 ? (
                                movies.map((movie) => (
                                    <MovieCard
                                        key={movie.imdbID}
                                        Poster={movie.Poster === 'N/A' ? "https://placehold.co/600x400" : movie.Poster}
                                        Year={movie.Year}
                                        Title={movie.Title}
                                        toggleWishlist={() => toggleWishlist(movie)}
                                        isWishlisted={wishlist.some(wishMovie => wishMovie.imdbID === movie.imdbID)}
                                    />
                                ))
                            ) : (
                                <p>No movies found</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
};

export default Homepage;

import React from 'react';
import '../styles/Homepage.css';
import MovieCard from '../components/MovieCard';

const Homepage = ({ movies, toggleWishlist, wishlist }) => {
    return (
        <div>
            <main className="gradient-custom pb-5 ">
                
                <div className="container-fluid p-5">
                    <div className="row row-cols-12 row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
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
            </main>

        </div>
    );
};

export default Homepage;

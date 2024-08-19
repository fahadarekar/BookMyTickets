import React from 'react';
import MovieCard from '../components/MovieCard';

const Wishlist = ({ wishlist, toggleWishlist }) => {
    return (
        <div>
            <div className="gradient-custom vh-100">
                <h1 className="text-center text-primary pt-3">Wishlist</h1>
                <div className="container-fluid p-5 pt-3">
                <div className="row row-cols-12 row-cols-1 row-cols-md-4 g-5">
                    {wishlist.length > 0 ? (
                        wishlist.map((movie) => (
                            <MovieCard
                                key={movie.imdbID}
                                Poster={movie.Poster === 'N/A' ? "https://placehold.co/600x400" : movie.Poster}
                                Year={movie.Year}
                                Title={movie.Title}
                                toggleWishlist={() => toggleWishlist(movie)}
                                isWishlisted={true} // All movies in wishlist are wishlisted
                            />
                        ))
                    ) : (
                        <p className = " fs-3 text-light">No movies in wishlist</p>
                    )}
                </div>
                </div>
            </div>
        </div>

    );
};

export default Wishlist;

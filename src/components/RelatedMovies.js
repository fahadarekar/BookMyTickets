import React from 'react'
import MovieCard from './MovieCard'
import { fetchMovies } from '../api';
import {useEffect, useState} from 'react' ;

const RelatedMovies = (movie) => {
    const [relatedMovies, setRelatedMovies] = useState([]);
    useEffect(() => {
        const fetchRelatedMovies = async () => {
            if (movie) {
                const movies = await fetchMovies(movie.Title);
                // Filter out the current movie from the list of related movies
                const filteredMovies = movies.filter((m) => m.imdbID !== movie.imdbID);
                setRelatedMovies(filteredMovies.slice(0, 4)); // Limit to 5 related movies
            }
        };

        fetchRelatedMovies();
    }, [movie]);
  return (
    <div>
        {/* Related Movies Section */}
        <div className="related-movies">
                        <h2 className="text-center text-primary pt-2 pb-3">Related Movies</h2>
                        <div className="container-fluid">
                        <div className="row row-cols-12 row-cols-sm-12 row-cols-md-4 p-5 pt-2 g-5 d-flex justify-content-center align-items-center pb-3">
                            {relatedMovies.length > 0 ? (
                                relatedMovies.map((relatedMovie) => (
                                    <MovieCard
                                        key={relatedMovie.imdbID}
                                        Poster={relatedMovie.Poster === 'N/A' ? "https://placehold.co/600x400" : relatedMovie.Poster}
                                        Year={relatedMovie.Year}
                                        Title={relatedMovie.Title}
                                        imdbID={relatedMovie.imdbID}
                                        toggleWishlist={() => {}}
                                        isWishlisted={false}
                                    />
                                ))
                            ) : (
                                <p className="fs-5 text-light">No related movies found</p>
                            )}
                        </div>
                        </div>
                    </div>
    </div>
  )
}

export default RelatedMovies
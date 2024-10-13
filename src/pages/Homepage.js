import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Homepage.css';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../api';

const Homepage = ({ toggleWishlist, wishlist }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchMoviesData = async () => {
            try {
                const response = await fetchMovies();
                const formattedMovies = response.map(movie => ({
                    imdbID: movie.id,
                    Title: movie.title,
                    Year: movie.duration,
                    Poster: movie.image_url,
                }));
                setMovies(formattedMovies);
            } catch (error) {
                console.error('Failed to fetch movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMoviesData();
    }, []);

    if (loading) {
        return <p>Loading movies...</p>;
    }

    return (
        <div>
            <main className="gradient-custom pb-5">
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
                                    movieId={movie.imdbID} // Pass movie ID to MovieCard
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

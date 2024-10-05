import React from 'react';
import '../styles/MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { fetchMovieBooked } from '../api'; // Import the API function

const MovieCard = ({ Poster, Year, Title, toggleWishlist, isWishlisted }) => {
    const navigate = useNavigate();

    const handleBookClick = async () => {
        try {
            // Fetch the detailed movie data
            const movieDetails = await fetchMovieBooked(Title);
            // Navigate to the booking page with the fetched movie details
            navigate('/booking', { state: { movie: movieDetails } });
        } catch (error) {
            console.error('Failed to fetch movie details:', error);
        }
    };

    return (

        <div className="col" >
            <div className="card bg-dark" style={{ borderRadius: '1.5rem', boxShadow: '10px 10px 25px black', height : '60%', width : '100%' }}>
                <img
                    className="bd-placeholder-img "
                    style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
                    width="100%"
                    height="350px"
                    src={Poster}
                    alt={Title}
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                />
                <div className="card-body cardBg" style={{  borderBottomLeftRadius : '1.5rem', borderBottomRightRadius : '1.5rem',  boxShadow: '10px 10px 25px black' }}>
                    <p className="card-text text-light">{Title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={handleBookClick} // Call the new function on button click
                            >
                                Book Now
                            </button>
                            <button
                                type="button"
                                className={`btn btn-sm ${isWishlisted ? 'btn-danger' : 'btn-outline-warning'}`}
                                onClick={toggleWishlist}
                            >
                                {isWishlisted ? 'Remove' : 'Wishlist'}
                            </button>
                        </div>
                        <div className="bg-secondary text-light p-1 rounded">
                            <small className="px-2">{Year}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

{/**/ }
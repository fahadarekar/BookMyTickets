import React from 'react';
import '../styles/MovieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ Poster, Year, Title, imdbID, toggleWishlist, isWishlisted }) => {
    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate('/booking', { state: { movie: { Poster, Year, Title, imdbID} } });
    };

    return (
        <div className="col">
            <div className="card bg-dark" style={{ borderRadius: '1.5rem', boxShadow: '10px 10px 25px black' }}>
                <img
                    className="bd-placeholder-img"
                    style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
                    width="100%"
                    height="300px"
                    src={Poster}
                    alt={Title}
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                />
                <div className="card-body" style={{ backgroundColor: '#55595' }}>
                    <p className="card-text text-light">{Title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={handleBookClick}
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

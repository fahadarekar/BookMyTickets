import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SuccessModal from './SuccessModal';

const Navbar = ({ setMovies }) => {
    const [searchMovie, setSearchMovie] = useState('');
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getCookieValue = (cookieName) => {
        const name = cookieName + "=";
        const decodedCookies = decodeURIComponent(document.cookie);
        const cookiesArray = decodedCookies.split(';');

        for (let cookie of cookiesArray) {
            cookie = cookie.trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return null;
    };

    const token = getCookieValue('token');

    useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
            setModalTitle('Successfully Logged In');
            setModalMessage('Welcome back!');
            setShowModal(true);
        }
    }, [token]);

    const SearchMovie = async (title) => {
        const response = await fetch(`http://localhost:8089/booking/movie`);
        const data = await response.json();
        setMovies(data.Search || []);
    };

    useEffect(() => {
        SearchMovie('batman');
    }, []);

    const handleCloseModal = () => setShowModal(false);

    const handleLogout = () => {
        // Clear the JWT token from cookies
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        setModalTitle('Successfully Logged Out');
        setModalMessage('You have been logged out successfully');
        setShowModal(true);
        // Redirect to the login page after logout
        navigate('/LoginForm');
    };

    return (
        <div className="navv">
            <nav className="navbar navbar-sm navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4 bg-danger rounded p-1" href="#">BookMyTickets</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {isLoggedIn ? (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item px-1">
                                    <NavLink to="/Home" className="nav-link fs-4">Home</NavLink>
                                </li>
                                <li className="nav-item px-1 fs-4">
                                    <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                                </li>
                                <li className="nav-item px-1 fs-4 dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink to="/wishlist" className="dropdown-item">Wishlist</NavLink></li>
                                        <li><NavLink to="/booking" className="dropdown-item">Booking</NavLink></li>
                                        <li><span className="dropdown-divider" /></li>
                                        <li><NavLink to="/latest" className="dropdown-item">Search by ImdbID</NavLink></li>
                                    </ul>
                                </li>
                                <li className="px-5">
                                    <form className="d-flex pt-1">
                                        <input
                                            className="form-control me-2 p-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={searchMovie}
                                            onChange={(e) => setSearchMovie(e.target.value)}
                                        />
                                        <NavLink to="/Home"
                                            className="btn btn-outline-light"
                                            type="button"
                                            onClick={() => SearchMovie(searchMovie)}
                                        >
                                            Search
                                        </NavLink>
                                    </form>
                                </li>
                            </ul>
                            <div>
                                <SuccessModal
                                    show={showModal}
                                    handleClose={handleCloseModal}
                                    title={modalTitle}
                                    message={modalMessage}
                                />
                                <button onClick={handleLogout} className="btn btn-success p-2 m-1">Logout</button>
                            </div>
                        </div>
                    ) : (
                        <div className="btn-group">
                            <SuccessModal
                                show={showModal}
                                handleClose={handleCloseModal}
                                title={modalTitle}
                                message={modalMessage}
                            />
                            <NavLink to="/LoginForm">
                                <button className="btn btn-danger p-2 m-1">Login</button>
                            </NavLink>
                            <NavLink to="/SignUp">
                                <button className="btn btn-success p-2 m-1">Register</button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

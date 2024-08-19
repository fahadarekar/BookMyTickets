import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = ({ setMovies }) => {
    const [searchMovie, setSearchMovie] = useState('');

    const SearchMovie = async (title) => {
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=7fd055a6`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search || []);
    };

    useEffect(() => {
        SearchMovie('batman');
    }, [])

    return (
        <div className="navv">
            <nav className="navbar navbar-sm navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand fs-4 bg-danger rounded p-1" href="#">BookMyTickets</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-1">
                                <NavLink to="/Home" className="nav-link fs-4">Home</NavLink>
                            </li>
                            <li className="nav-item px-1 fs-4">
                                <NavLink to = "/dashboard" className="nav-link">Dashboard</NavLink>
                            </li>
                            <li className="nav-item px-1 fs-4 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink to="/wishlist" className="dropdown-item">Wishlist</NavLink></li>
                                    <li><NavLink to="/booking" className="dropdown-item">Booking</NavLink></li>
                                    <li><span className="dropdown-divider" /></li>
                                    <li><NavLink to = "/latest" className="dropdown-item">Latest Releases</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item px-1 fs-4">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
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
                            <div className="btn-group">
                                <NavLink to="/LoginForm"><button className="btn btn-danger p-2 m-1">Login</button></NavLink>
                                <NavLink to="/SignUp"><button className="btn btn-success p-2 m-1">Register</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as needed
import Homepage from './pages/Homepage'; // Adjust the path as needed
import SignUp from './components/SignUp'; // Adjust the path as needed
import LoginForm from './components/LoginForm'; // Adjust the path as needed
import Wishlist from './pages/Wishlist';
import Book from './components/Book'
import Footer from './components/Footer';
import Feature from './pages/Feature';
import Dashboard from './pages/Dashboard';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (movie) => {
        setWishlist((prevWishlist) => {
            if (prevWishlist.some(wishMovie => wishMovie.imdbID === movie.imdbID)) {
                return prevWishlist.filter(wishMovie => wishMovie.imdbID !== movie.imdbID);
            } else {
                return [...prevWishlist, movie];
            }
        });
    };
   

    return (
        <>
            <Navbar setMovies={setMovies} />
            <Routes>
                <Route path="/" element={<Homepage movies={movies} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
                <Route path="/home" element={<Homepage movies={movies} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/wishlist" element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                <Route path="/loginform" element={<LoginForm />} />
                <Route path="/booking" element={<Book />} />
                <Route path = "/latest" element = {<Feature toggleWishlist = {toggleWishlist}/>}></Route>
                <Route path = "/dashboard" element = {<Dashboard />}></Route>

            </Routes>
            <Footer />
        </>
    );
};

export default App;

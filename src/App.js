import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import Wishlist from './pages/Wishlist';
import Book from './components/Book';
import Footer from './components/Footer';
import Feature from './pages/Feature';
import Dashboard from './pages/Dashboard';
import MyBooking from './components/MyBooking';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (movie) => {
        setWishlist((prevWishlist) => {
            if (prevWishlist.some(wishMovie => wishMovie.id === movie.id)) {
                return prevWishlist.filter(wishMovie => wishMovie.id !== movie.id);
            } else {
                return [...prevWishlist, movie];
            }
        });
    };

    return (
        <>
            <Navbar setMovies={setMovies} />
            <Routes>
                <Route path="/" element={<Homepage setMovies={setMovies} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
                <Route path="/home" element={<Homepage setMovies={setMovies} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/wishlist" element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                <Route path="/loginform" element={<LoginForm />} />
                <Route path="/booking/:movieId" element={<Book />} />
                <Route path="/latest" element={<Feature toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/booking" element={<MyBooking />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

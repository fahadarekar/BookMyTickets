import React, { useEffect, useState } from 'react';
import '../styles/Booking.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; 
import moment from 'moment';
import SuccessModal from './SuccessModal';

const BookingModal = ({ movie }) => {
    const [selectedShowtime, setSelectedShowtime] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(movie);
    const [showLoading, setShowLoading] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');   

    const showtimes = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'];

    const totalSeats = 40;

    function getCookieValue(cookieName) {
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
    }

    const handleSeatSelection = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seatNumber)) {
                return prevSelectedSeats.filter((seat) => seat !== seatNumber);
            } else {
                return [...prevSelectedSeats, seatNumber];
            }
        });
    };

    const handleCloseModal = () =>{
        setShowLoading(false)
    }

    const handleShowtimeSelection = (showtime) => {
        setSelectedShowtime(showtime);
        setSelectedSeats([]);
    };

    const convertToTimestamp = (time) => {
        const today = new Date();
        const [hours, minutes, period] = time.match(/(\d+):(\d+) (\w+)/).slice(1);
        const hours24Format = period === 'PM' && hours !== '12' ? parseInt(hours) + 12 : parseInt(hours);
        today.setHours(hours24Format, parseInt(minutes), 0, 0); 
        return today.toISOString(); // Return ISO format
    };

    const handleBooking = async () => {
        if (!selectedShowtime || selectedSeats.length === 0 || !selectedMovie) {
            setModalTitle('Booking Unsuccessful');
            setModalMessage('Show Time or Seat not selected');
            setShowLoading(true);
            return; // Early return to prevent further processing
        }

        const userId = getCookieValue('userId');
        const token = getCookieValue('token');

        // Convert selected showtime to timestamp
        const showtimeAsTimestamp = convertToTimestamp(selectedShowtime);

        try {
            const res1 = await axios.post(
                "http://localhost:8089/booking/book",
                {
                    userId: userId,
                    movie_id: selectedMovie.id,
                    showTime: showtimeAsTimestamp, // Pass the timestamp
                    seatIds: selectedSeats,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (res1.status === 200) {
                setModalTitle('Booking Successful');
                setModalMessage('Your booking has been confirmed successfully.');
            } else {
                setModalTitle('Booking Unsuccessful');
                setModalMessage('Your booking has failed for some reason.');
            }
        } catch (error) {
            console.error("Error during booking:", error);
            setModalTitle('Booking Unsuccessful');
            setModalMessage('Your booking has failed for some reason.');
        } finally {
            setShowLoading(true); // Ensure the modal shows regardless of success/failure
        }
    };

    return (
        <div className="booking-page">
            {selectedMovie && (
                <div className="selected-movie">
                    <h2>Booking for: {selectedMovie.title}</h2>
                    <p>{selectedMovie.title}</p>
                    <p>Genre: {selectedMovie.genre}</p>
                    <p>Duration: {selectedMovie.duration} mins</p>
                </div>
            )}
            <SuccessModal
                show={showLoading}
                handleClose={handleCloseModal}
                title={modalTitle}
                message={modalMessage}
            />

            <div className="showtimes">
                <h2>Select Showtime</h2>
                <div className="showtime-buttons">
                    {showtimes.map((time, index) => (
                        <button
                            key={index}
                            className={`showtime-button ${selectedShowtime === time ? 'selected' : ''}`}
                            onClick={() => handleShowtimeSelection(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            <div className="seats">
                <h2>Select Seats</h2>
                <div className="seat-map">
                    {Array.from({ length: totalSeats }, (_, i) => i + 1).map((seat) => (
                        <button
                            key={seat}
                            className={`seat ${selectedSeats.includes(seat) ? 'selected-seat' : ''}`}
                            onClick={() => handleSeatSelection(seat)}
                        >
                            {seat}
                        </button>
                    ))}
                </div>
            </div>

            <button className="booking-button" onClick={handleBooking}>
                Confirm Booking
            </button>
        </div>
    );
};

export default BookingModal;

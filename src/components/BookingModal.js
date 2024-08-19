import React from 'react';
import {useState} from 'react';
import '../styles/Booking.css';
const BookingModal = () => {
    const [selectedShowtime, setSelectedShowtime] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const showtimes = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM']; // Example showtimes
    const totalSeats = 40; // Example total number of seats

    const handleSeatSelection = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seatNumber)) {
                return prevSelectedSeats.filter((seat) => seat !== seatNumber);
            } else {
                return [...prevSelectedSeats, seatNumber];
            }
        });
    };

    const handleShowtimeSelection = (showtime) => {
        setSelectedShowtime(showtime);
        setSelectedSeats([]); // Reset selected seats when changing showtime
    };

    const handleBooking = () => {
        if (!selectedShowtime || selectedSeats.length === 0) {
            alert('Please select a showtime and at least one seat.');
            return;
        }

        // Handle booking logic here

    };

    return (
        <div>
            <div className="booking-page">


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
        </div>
    )
}

export default BookingModal
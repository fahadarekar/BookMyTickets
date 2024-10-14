import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Dashboard = () => {
  const [moviesBooked, setMoviesBooked] = useState([]); // State to store booked movies
  const [error, setError] = useState(null); // State to handle errors

  // Function to retrieve a specific cookie value by name
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

  const userId = getCookieValue('userId');
  const token = getCookieValue('token');

  const displayBooking = async () => {
    console.log("User ID:", userId, "Token:", token);

    if (!userId || !token) {
      console.error("User ID or Token is missing.");
      alert("You are not authenticated. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8089/booking/bookedMovie`, // Ensure this is the correct endpoint
        null, // No data in the body
        {
          params: {
            userId: userId // Sending userId as query parameter
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('Response:', response);
      if (response.status === 200) {
        setMoviesBooked(response.data); // Assuming response.data is an array of booked movies
      } else {
        setError('Failed to fetch booked movies. Please try again.');
      }
    } catch (error) {
      console.error("Error during fetching booked movies:", error.response ? error.response.data : error.message);
      if (error.response) {
        if (error.response.status === 401) {
          alert("Unauthorized access. Please log in again.");
        } else {
          setError("Failed to fetch booked movies. Please try again.");
        }
      } else if (error.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    displayBooking();
  }, []);

  return (
    <div className="container-fluid vh-100 gradient-custom p-4">
      <h1 className="text-light">Your List of Bookings</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      {moviesBooked.length > 0 ? (
        <div className="booked-movies">
          <h2 className="text-light">Booked Movies:</h2>
          <div className="row">
            {moviesBooked.map((movie, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4">
                <MovieCard
                  Poster={movie.image_url}
                  title={movie.title}
                  description={movie.description}
                  duration={movie.duration}
                  genre={movie.genre}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-light">No bookings found. Click the button above to fetch your bookings.</p>
      )}
    </div>
  );
};

export default Dashboard;

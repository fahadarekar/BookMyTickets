import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function MyBooking({userId}) {

    console.log("line 7 myBooking", userId)

    const [showLoading, setShowLoading] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');  

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

    const token = getCookieValue('token')

    const fetchMovies = async() =>{
        try{
            const bookedMovies = await axios.post(`http://localhost:8089/booking/bookedMovie/${userId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("line 36 MyBooking", bookedMovies)
            
            if (bookedMovies.status === 200) {
                setModalTitle('Booking Successful');
                setModalMessage('Your booking has been confirmed successfully.');
            } else {
                setModalTitle('Booking Unsuccessful');
                setModalMessage('Your booking has failed for some reason.');
            }
        }catch (error) {
            console.error("Error during booking:", error);
            setModalTitle('Booking Unsuccessful');
            setModalMessage('Your booking has failed for some reason.');
        } finally {
            setShowLoading(true);
        }
    }

  return (
    <div>
      MyBooking
      <button onClick={fetchMovies}>Text</button>
    </div>
  )
}

export default MyBooking

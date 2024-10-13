import React from 'react'
import axios from 'axios'

const Dashboard = () => {

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

const userId = getCookieValue('userId')
const token = getCookieValue('token')

  const displayBooking = async() =>{

    console.log("line 23", userId, token)

    try{
      const response = await axios.post(`http://localhost:8089/booking/bookedMovie/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('response in line 36', response)
    }catch(error){
      console.error("Error during booking:", error);

  }

  }

  return (
    <div className="container-fluid vh-100 gradient-custom">
      <h1 className="text-light"> Your List of Bookings.</h1>
      <button type = 'text' onClick={displayBooking}>Yes</button>
    </div>
  )
}

export default Dashboard
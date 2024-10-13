import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());   

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h2 className = "text-dark">Select a Date:</h2>
                    </div>
                    <div className="col-8">
                        <Calendar
                            onChange={setDate}
                            value={date}
                        />
                        <p>Selected Date: {date.toDateString()}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarComponent;

import React, { useEffect, useState } from "react";
import styles from "./officesPage.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const onDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleCheckOffices =  (givenDate) => {
   var modifiedDate = (givenDate.toDateString()).replace(" ", "");
   var anotherModified = modifiedDate.replace(" ", "");
   var anotherOne = anotherModified.replace(" ", "");
    navigate("/offices/" + anotherOne);
  };

  const handleSeeBookings = () => {

  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "auto" }}>
        <div>
          <h2>Choose a day</h2>
          <Calendar
            className={styles.reactCalendar}
            onChange={onDateChange}
            value={date}
            onClick={handleCheckOffices(date)}
            
          />
        
        </div>
      </div>
      <button
          onClick={handleSeeBookings}
          style={{
            width: "110px",
            height: "40px",
            textAlign: "center",
            borderStyle: "double",
            marginTop: "320px",
            marginRight: "200px",
            backgroundColor: "#F7eff6",
          }}
        >
          My Bookings
        </button>
    </div>
  );
}

export default CalendarPage;

import React, { useEffect, useState } from "react";
import styles from "./officesPage.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function OfficesPage() {
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
          {/* {console.log(date.toDateString())} */}
        
        </div>
      </div>
    </div>
  );
}

export default OfficesPage;

import React, { useEffect, useState } from "react";
import Office from "../components/office/Office";
import getOffices from "../services/Offices/getOffices";
import getOfficesByDate from "../services/Offices/getOfficesByDate";
import styles from "./officesPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import creteBooking from "../services/Bookings/createBooking";
import { useParams } from "react-router-dom";

function Disabled({ disabled, children }) {
  if (disabled) {
    return (
      <div style={{ opacity: 0.5, pointerEvents: "none" }} disabled>
        {children}
      </div>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
}

function OfficesPage() {
  const [offices, setOffices] = useState([]);
  const [officesByDate, setOfficesByDate] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [isActive, setIsActive] = useState(false);

  let params = useParams();
 var newDate = JSON.stringify(params);

 let initialDate = newDate.substring(6,21);
 let anotherDate = initialDate.substring(3,6) + " " + initialDate.substring(6,9) +
 " " + initialDate.substring(9,11) + " " + initialDate.substring(11);




  const onCLickSelectOffice = (id) => {
    setSelectedOffice(id);
  };

  const getOffices = async () => {
    const offices = await getOfficesByDate(newDate);
    setOfficesByDate(offices);
  };

  useEffect(() => {
    getOffices();
  }, []);



  const handleBookDeskButtonOnClick = async () => {
    await Promise.all([creteBooking(1, selectedOffice, newDate)]);
    alert('Thank you for your booking!');
    window.location = '/';
   
  };

  return (
    <div className={styles.wrapperContent}>
      <div style={{ width: "70%" }}>
        <div className={styles.container}>
          {officesByDate.map((office) => (
            <div
              key={office.id}
              // isActive={selectedOffice === office.id}
              onClick={() => onCLickSelectOffice(office.id)}
            >
              <Disabled disabled={!office.available}>
                <Office
                  isActive={selectedOffice === office.id}
                  office={office}
                  className={styles.office}
                />
              </Disabled>
            </div>
          ))}
        </div>
      </div>


      <div syle={{display:'flex', flexDirection:'row'}}>
        <div className={styles.summary}>
          <h3>Summary</h3>
          <p style ={{fontSize:'17px'}}>
          You selected office number {200 + selectedOffice}
          </p>
          <p>
          For {anotherDate}
          </p>
         

          
        </div>
        <div>
        <button
          onClick={handleBookDeskButtonOnClick}
          style={{
            width: "110px",
            height: "40px",
            textAlign: "center",
            borderStyle: "double",
            marginTop: "20px",
            marginLeft: "107px",
            backgroundColor: "#F7eff6",
          }}
        >
          Book Desk
        </button>
      </div>
      </div>
      
    </div>
  );
}

export default OfficesPage;

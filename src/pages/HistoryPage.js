import { React, useEffect, useState, Component } from "react";
import getBookingsByUserId from "../services/Bookings/getBookingByUserId";
import { json, Link, useNavigate, useParams } from "react-router-dom";
import DisplayData from "../components/Table";

function HistoryPage() {
  const [bookings, setBookings] = useState([]);
  const { userId } = useParams();

  const getBookings = async () => {
    const history = await getBookingsByUserId(userId);
    setBookings(history);
  };

  useEffect(() => {
    getBookings();
  }, []);




  return (
    <div>
      <p>
        <h2 style={{marginLeft:'200px',marginTop:'50px',marginBottom:'40px'}}>Booking history</h2>
      </p>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <DisplayData data={bookings}/>
         </div>
    </div>
  );
}

export default HistoryPage;

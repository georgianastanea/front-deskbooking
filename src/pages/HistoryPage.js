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


console.log(bookings);

  return (
    <div>
     {/* <DisplayData data={Array.of(bookings)}/> */}
    </div>
  );
}

export default HistoryPage;

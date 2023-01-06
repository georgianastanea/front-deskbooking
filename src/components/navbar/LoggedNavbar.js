import styles from "./navbar.scss";
import React, { useEffect, useState } from "react";
import axios from 'axios';

export function LoggedNavBar() {
  const [activeUserId, setActiveUserId] = useState(null);

  const getId = async () =>
  {
    const res = await axios.get('/users/active', {
    responseType: 'text',
    transformResponse: [v => v]
  });
  
    let myJson = JSON.parse(res.data);
    setActiveUserId(myJson[0].id);
  }
    getId();

    let bookingUrl = "http://localhost:3000/bookings/user/" + activeUserId;

  return (
    <nav id="nav">
      <div class="nav left">
        <span class="gradient skew">
          <h1 class="logo un-skew">
            <a href="/">Best IT</a>
          </h1>
        </span>
        <button id="menu" class="btn-nav">
          <span class="fas fa-bars"></span>
        </button>
      </div>
      <div class="nav right">
        <a href="/" class="nav-link active">
          <span class="nav-link-span">
            <span class="u-nav">Home</span>
          </span>
        </a>
        

        <a href="http://localhost:8080/logout" class="nav-link active">
          <span class="nav-link-span">
            <span class="u-nav">Log Out</span>
          </span>
        </a>

        <a href={bookingUrl} class="nav-link ">
          <span class="nav-link-span">
            <span class="u-nav">My bookings</span>
          </span>
        </a>
        
      </div>
    </nav>
  );
}

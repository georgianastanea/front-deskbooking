import React from 'react'
import image from '../utility/background.jpg';
import styles from './homePage.css';
import { useNavigate } from "react-router-dom";


 

function HomePage() {

    const navigate = useNavigate();

    const handleLogInButton =  () => {
        window.location.replace('http://localhost:8080/login');
        // navigate("/login");
      };

    const handleRegisterButton = () => {
        navigate("/registration");
    };


    return (
        <div style={{ backgroundImage:`url(${image})`,backgroundPosition: 'center',
        backgroundSize: '100%',
        minHeight: '100%',
        minWidth: '1024px',
        width: '100%',
        height: 'auto',
        position: 'fixed',
        top: '60px',
        left: '0'}}  >
            <h1 className='header1'>Book a desk </h1>
            <h2 className='header2'>at your office</h2>
            <div className='buttonsDiv'>
            <button onClick={handleLogInButton} class="button-28" role="button">Log in</button>
            <button onClick={handleRegisterButton} class="button-28" role="button">Sign up</button>
            </div>
        </div>
    )
}

export default HomePage
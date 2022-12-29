import React from 'react'
import image from '../utility/background.jpg';
import styles from './homePage.css';

function HomePage() {
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
        </div>
    )
}

export default HomePage
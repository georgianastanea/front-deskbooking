import React, { useState } from 'react';
import styles from '../../pages/officesPage.module.scss';


function Office(props) {

   
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);}


    return (
        <div
            className={props.className}
        >
            <div style={{ width: '90%' }} onClick={handleClick}>
                <p>
                    {props.office.number}
                    
                </p>
                <p>
                   {String(props.office.available)}
                </p>
            </div>
        </div>
    );
}

export default Office;
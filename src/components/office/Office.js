import React, { useState } from 'react';
import styles from '../../pages/officesPage.module.scss';


function Office(props) {

   
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);}


    return (
        <div
            className={props.className}
        >
            <div style={{ width: '90%' }} onClick={handleClick}>
                <p style ={{marginTop:'15px', marginRight:'5px'}}>
                    {props.office.number}
                    
                </p>
            </div>
        </div>
    );
}

export default Office;
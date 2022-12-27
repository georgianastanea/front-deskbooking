import React, { useState } from 'react';


function Office(props) {

  

    return (
        <div
            className={props.className}
        >
            <div style={{ width: '90%' }}>
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
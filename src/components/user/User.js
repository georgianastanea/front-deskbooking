import React, { useState } from 'react';

function User(props){
    return(
        <div className={props.className}>
            <p>
                Id: {props.user.id}
            </p>
            <p>
                Email: {props.user.email}
            </p>
            <p>
                Password: {props.user.password}
            </p>

        </div>
    )
}

export default User;
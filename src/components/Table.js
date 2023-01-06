import 'bootstrap/dist/css/bootstrap.css';
import { json } from 'react-router-dom';
import { React, useEffect, useState, Component } from "react";
import './table.css';

function DisplayData(data){

    useEffect(() => {
        console.log(data);
      }, [data]);
    
    const DisplayData = data.data.map(
        (info) => {
            return(
                <tr>
                    <td>{info.officeNumber}</td>
                    <td>{info.date}</td>
                </tr>
            )
        }
    )
    
    return (
        <div>
             <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Office Number</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>

                <tbody>

                    {DisplayData}

                </tbody>
             </table>
        </div>
    )
}

export default DisplayData;
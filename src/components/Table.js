import React from 'react';
import { json } from 'react-router-dom';

function DisplayData(data){
    const DisplayData = data.map(
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
                        <th>Office Number</th>
                        <th>Date</th>
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
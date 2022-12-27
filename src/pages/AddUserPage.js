import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import getUsers from '../services/Users/getUsers'
import User from '../components/user/User';

function AddUserPage() {

    const [users, setUsers] = useState([]);

    const getResult = async () => {
        const result = await getUsers();
        setUsers(result);
    };

    useEffect(() => {
        getResult();
    }, []);

    return (
        <div>users here
            {users.map(user => (
            <div key={user.id}>
                <User
                user={user}
                />
                </div>
        ))}</div>
    )
}

export default AddUserPage;
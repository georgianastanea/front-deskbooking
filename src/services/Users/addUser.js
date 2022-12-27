import { API } from '../../utility/api';

const createUser = async (
    email,
    password
) => {
    try {
        console.log(email, password);
        const response = await API.post('/users', {
            email,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default createUser;

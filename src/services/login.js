import { API } from '../utility/api';

const logIn = async (
    email,
    password
) => {
    try {
        console.log(email, password);
        const response = await API.post('/login', {
            email,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default logIn;
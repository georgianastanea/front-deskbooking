import { API } from '../../utility/api';

const getUsers = async () => {
    try {
        const response = await API.get('/users');
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getUsers;

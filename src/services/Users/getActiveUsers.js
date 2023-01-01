import { API } from '../../utility/api';

const getActiveUsers = async () => {
    try {
        const response = await API.get('/users/active');
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getActiveUsers;

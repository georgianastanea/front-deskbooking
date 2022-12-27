import { API } from '../../utility/api';

const getOfficeById = async userId => {
    try {
        const response = await API.get(`/users/${userId}`);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getOfficeById;

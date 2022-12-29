import { API } from '../../utility/api';

const getOfficesByDate = async date => {
    try {
        const response = await API.get(`/offices/${date}`);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getOfficesByDate;

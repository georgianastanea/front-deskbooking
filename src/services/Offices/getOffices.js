import { API } from '../../utility/api';

const getOffices = async () => {
    try {
        const response = await API.get('/offices');
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getOffices;

import { API } from '../../utility/api';

const getBookings = async () => {
    try {
        const response = await API.get('/bookings');
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getBookings;

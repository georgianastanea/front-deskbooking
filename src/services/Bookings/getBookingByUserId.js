import { API } from '../../utility/api';

const getBookingsByUserId = async userId => {
    try {
        const response = await API.get(`/bookings/user/${userId}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getBookingsByUserId;

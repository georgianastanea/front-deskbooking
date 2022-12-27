import { API } from '../../utility/api';

const getBookingById = async bookingId => {
    try {
        const response = await API.get(`/bookings/${bookingId}`);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default getBookingById;

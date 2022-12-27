import { API } from '../../utility/api';

const deleteBooking = async bookingId => {
    try {
        const response = await API.delete(`/bookings/${bookingId}`);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default deleteBooking;

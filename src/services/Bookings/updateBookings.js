import { API } from '../../utility/api';

const updateBooking = async (
    bookingId,
    userId,
    officeId,
    date
) => {
    try {
        const response = await API.put(`/bookings/${bookingId}`, {
            email,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default updateBooking;

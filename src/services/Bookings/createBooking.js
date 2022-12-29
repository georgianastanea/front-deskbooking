import { API } from '../../utility/api';

const creteBooking = async (
    userId,
    officeId,
    date
) => {
    try {
        const response = await API.post('/bookings', {
            userId,
            officeId,
            date
        });
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default creteBooking;

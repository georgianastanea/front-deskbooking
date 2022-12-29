import { API } from '../../utility/api';

const updateOffice = async (
    id,
    number,
    isAvailable
) => {
    try {
        const response = await API.put(`/offices/${id}`, {
            number,
            isAvailable
        });
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default updateOffice;

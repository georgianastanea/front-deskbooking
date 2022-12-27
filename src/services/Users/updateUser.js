import { API } from '../../utility/api';

const updateUser = async (
    userId,
    email,
    password
) => {
    try {
        const response = await API.put(`/users/${userId}`, {
            email,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default updateUser;

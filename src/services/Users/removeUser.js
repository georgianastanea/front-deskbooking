import { API } from '../../utility/api';

const deleteUser = async userId => {
    try {
        const response = await API.delete(`/users/${userId}`);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export default deleteUser;

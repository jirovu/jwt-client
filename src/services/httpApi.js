import Axios from 'axios';
import Cookies from 'js-cookie';

const url = 'http://localhost:4000';

const login = async (username, password) => {
    let user = { username, password };

    try {
        const token = await Axios.post(`${url}/auth/login`, user).then(res => res.data);
        Cookies.set('access_token', token);
        return true;
    } catch (err) {
        return false;
    }
}

const getAllItemAdmin = async () => {
    try {
        const token = Cookies.get('access_token');
        let items = await Axios.get(`${url}/admin/getAllItem`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(res => res.data);
        return items;
    } catch (err) {
        return [];
    }
}

const getAllItemUser = async () => {
    try {
        const token = Cookies.get('access_token');
        console.log(token);
        let items = await Axios.get(`${url}/users/getAllItem`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(res => res.data);
        return items;
    } catch (err) {
        return [];
    }
}

const httpApi = { login, getAllItemAdmin, getAllItemUser };
export default httpApi 
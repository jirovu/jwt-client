import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const checkRole = _ => {
    const token = Cookies.get('access_token');
    let result = jwt.decode(token);
    return token ? result.role : '';
}

export default checkRole;
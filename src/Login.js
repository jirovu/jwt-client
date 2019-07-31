import React, { useState, useContext } from 'react';
import httpApi from './services/httpApi';
import { Context } from './App';

const Login = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(Context);

    const onChangeUsername = e => {
        setUsername(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const onLogin = async e => {
        e.preventDefault();
        if (username && password) {
            const result = await httpApi.login(username, password);
            if (result) {
                dispatch({ type: 'LOGIN' });
            }
        }
    }

    return (
        <form onSubmit={onLogin}>
            <input type="text" name="username" value={username}
                onChange={onChangeUsername} placeholder="username" />
            <br />
            <input type="password" name="password" value={password}
                onChange={onChangePassword} placeholder="password" />
            <br />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;
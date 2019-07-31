import React, { useEffect, useContext } from 'react';
import { Context } from './App';
import checkRole from './services/checkRole';
import httpApi from './services/httpApi';

const Cart = props => {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        (async () => {
            let role = checkRole();
            if (role === 'ADMIN') {
                const items = await httpApi.getAllItemAdmin();
                console.log(items);
                dispatch({ type: 'ADD_ITEM', payload: items });
            } else {
                const items = await httpApi.getAllItemUser();
                dispatch({ type: 'ADD_ITEM', payload: items });
            }
        })();
    }, []);

    return (
        state.items && (
            <ul>
                {state.items.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        )
    )
}

export default Cart;
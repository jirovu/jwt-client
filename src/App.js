import React, { useReducer } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Login from './Login';
import Cart from './Cart';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogedIn: true };
    case 'LOGOUT':
      return { items: [], isLogedIn: false };
    case 'ADD_ITEM':
      return { ...state, isLogedIn: true, items: action.payload }
    default:
      throw new Error();
  }
}

export const Context = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    isLogedIn: false
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <ul>
          {!state.isLogedIn && <li>
            <Link to="/">Login</Link>
          </li>}
          {state.isLogedIn && <li>
            <Link to="/cart">Cart</Link>
          </li>}
        </ul>

        <hr />
        {!state.isLogedIn && <Route exact path="/" component={Login} />}
        {state.isLogedIn && <Route path="/cart" component={Cart} />}
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

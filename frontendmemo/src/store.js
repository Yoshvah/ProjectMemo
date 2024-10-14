// src/store.js
import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  userData: null,
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        errors: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
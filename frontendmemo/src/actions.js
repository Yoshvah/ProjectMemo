// src/actions.js
export const loginSuccess = (userData) => ({
    type: 'LOGIN_SUCCESS',
    payload: userData,
  });
  
  export const loginFail = (errors) => ({
    type: 'LOGIN_FAIL',
    payload: errors,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
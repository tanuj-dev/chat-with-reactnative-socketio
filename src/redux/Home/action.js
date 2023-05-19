import axios from 'axios';

import {
  GET_USER_DATA_STAR,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROE,
} from './actionTypes';

export const userData = () => async dispatch => {
  dispatch({type: GET_USER_DATA_STAR});
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users,');
    console.log(res, 'dfjdnfkjdbk');
    dispatch({
      type: GET_USER_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_DATA_ERROE,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const storeUserSessionasync = async (email, password) => {
  dispatch({type: 'LOGIN_DATA'});
  try {
    await EncryptedStorage.setItem(
      'user_session',
      JSON.stringify({
        age: 21,
        token: 'ACCESS_TOKEN',
        password: 12345678,
        username: 'tanujprajapati2000@gmail.com',
        languages: ['fr', 'en', 'de'],
      }),
    );

    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
  }
};

export const retrieveUserSession = async () => {
  dispatch({type: 'logindata'});
  try {
    const session = await EncryptedStorage.getItem('user_session');

    if (session !== undefined) {
      dispatch({type: 'logindatasuc', payload: session});
    }
  } catch (error) {
    // There was an error on the native side
  }
  return;
};

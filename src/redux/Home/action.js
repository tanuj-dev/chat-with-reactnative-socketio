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
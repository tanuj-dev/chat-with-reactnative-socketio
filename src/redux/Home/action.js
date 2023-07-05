import axios from 'axios';

import {
  GET_USER_DATA_STAR,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROE,
} from './actionTypes';
import {Common} from '@utilities';

export const userData = () => async dispatch => {
  dispatch({type: GET_USER_DATA_STAR});
  try {
    const res = await Common.axiosInstance({
      method: 'get',
      url: '/users',
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
    // console.log(res, 'dfjdnfkjdbk');
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

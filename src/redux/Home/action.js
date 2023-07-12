import axios from 'axios';

import {
  GET_USER_DATA_STAR,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROE,
  ADD_DATA,
  DELETE_DATA,
  EDIT_DATA,
  RETRIVE_DATA,
  RESET_DATA,
} from './actionTypes';
import {Common} from '@utilities';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const userData = () => async dispatch => {
//   dispatch({type: GET_USER_DATA_STAR});
//   try {
//     const res = await Common.axiosInstance({
//       method: 'get',
//       url: '/users',
//       baseURL: 'https://jsonplaceholder.typicode.com',
//     });
//     // console.log(res, 'dfjdnfkjdbk');
//     dispatch({
//       type: GET_USER_DATA_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_USER_DATA_ERROE,
//       payload:
//         error.data && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
export const createData = data => dispatch => {
  try {
    dispatch({
      type: ADD_DATA,
      payload: data,
    });
  } catch (err) {}
};
export const deleteData = id => dispatch => {
  console.log('fasdfas ', id);
  try {
    dispatch({
      type: DELETE_DATA,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
export const editData = data => dispatch => {
  try {
    dispatch({
      type: EDIT_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const saveRecord = async data => {
  try {
    const res = await AsyncStorage.setItem('USER_STORE', data);
    return res;
  } catch (error) {
    return null;
  }
};
export const getSaveRecord = () => async dispatch => {
  try {
    const data = await AsyncStorage.getItem('USER_STORE');
    if (data) {
      const record = JSON.parse(data);
      console.log(record);
      dispatch({
        type: RETRIVE_DATA,
        payload: record,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

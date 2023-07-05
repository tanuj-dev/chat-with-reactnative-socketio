import {
  GET_USER_DATA_STAR,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROE,
} from './actionTypes';

const userInitialData = {
  Loading: false,
  data: [],
  message: '',
};
export const userData = (state = userInitialData, action) => {
  switch (action.type) {
    case GET_USER_DATA_STAR:
      return {
        loading: true,
        data: [],
      };
    case GET_USER_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_USER_DATA_ERROE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

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

// const userInitialData = {
//   Loading: false,
//   data: [],
//   message: '',
// };
// export const userData = (state = userInitialData, action) => {
//   switch (action.type) {
//     case GET_USER_DATA_STAR:
//       return {
//         loading: true,
//         data: [],
//       };
//     case GET_USER_DATA_SUCCESS:
//       return {
//         loading: false,
//         data: action.payload,
//       };
//     case GET_USER_DATA_ERROE:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const userInitialData = {
  data: [],
};

export const userData = (state = userInitialData, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        data: [...state.data, action.payload],
      };
    case EDIT_DATA:
      return {
        data: [
          ...state.data.map(user =>
            user.ID == action.payload.ID ? action.payload : user,
          ),
        ],
      };
    case DELETE_DATA:
      // console.log('tanuj', action);
      // console.log(state.data[0].ID, 'tanujprajapati');
      const id = action.payload;

      return {
        data: [...state.data.filter(user => user.ID !== id)],
      };
    case RETRIVE_DATA:
      return action.payload;
    case RESET_DATA:
      return userInitialData;
    default:
      return state;
  }
};

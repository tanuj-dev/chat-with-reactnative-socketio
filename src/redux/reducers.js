import {combineReducers} from 'redux';
import {userData} from './Home/reducer';

export default combineReducers({
  userdata: userData,
});

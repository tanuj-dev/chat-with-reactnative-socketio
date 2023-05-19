import {combineReducers} from 'redux';
import {userData, retrieveUserSession} from './Home/reducer';

export default combineReducers({
  HomeData: userData,
  logindata: retrieveUserSession,
});

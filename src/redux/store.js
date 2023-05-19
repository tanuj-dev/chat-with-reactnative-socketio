import {create} from 'react-test-renderer';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

let middleware = [thunk];
// if ('development' === `development`) {
//   applyMiddleware.push(logger);
// }

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;

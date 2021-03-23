import {createStore} from 'redux';
import authReducer from './auth/authReducer.js';

const store = createStore(authReducer);

export default store;

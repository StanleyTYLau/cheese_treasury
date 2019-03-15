import authReducer from './authReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  item: itemReducer,
});

export default rootReducer;
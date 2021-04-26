import { combineReducers } from "redux";
import userReducer from './userReducer.js';
import mediaReducer from './mediaReducer.js';

export default combineReducers({
  user: userReducer,
  media: mediaReducer
});
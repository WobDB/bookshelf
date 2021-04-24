import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
  media: mediaReducer
})
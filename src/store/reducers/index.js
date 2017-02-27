import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentInputTextReducer from './commentInputTextReducer';
import usernameReducer from './usernameReducer';

export default combineReducers({
  username: usernameReducer,
  post: postReducer,
  commentInputText: commentInputTextReducer,
});

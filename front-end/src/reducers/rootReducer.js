import { combineReducers } from 'redux';
import postReducers from './post';

const rootReducer = combineReducers({
  posts: postReducers,
});

export default rootReducer;

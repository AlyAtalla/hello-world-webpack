import { combineReducers } from 'redux';
import greetingReducer from './greetingReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
  // Add other reducers as needed
});

export default rootReducer;

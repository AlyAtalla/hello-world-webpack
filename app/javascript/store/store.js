import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import greetingReducer from "../reducers/greetingReducer";
const rootReducer = combineReducers({
  greetings: greetingReducer
})
export default function setupStore(preloadedState){
  return configureStore({
    reducer : rootReducer,
    preloadedState
  })
}

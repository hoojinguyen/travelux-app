import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import usersReducer from './slices/usersSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

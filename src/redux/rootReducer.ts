import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import usersReducer from './slices/usersSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  users: usersReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

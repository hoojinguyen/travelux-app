import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice';
import usersReducer from './slices/usersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  users: usersReducer,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['counter'],
};

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(rootPersistConfig, rootReducer);

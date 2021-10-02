import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['users'],
};

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(rootPersistConfig, rootReducer);

// import axiosClient from '../axiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginPayload, Token } from '../../models/authType';

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const login = async ({ email, password }: LoginPayload): Promise<Token> => {
  const emailDefault = 'hoi@gmail.com';
  const passwordDefault = '123456';
  if (email == emailDefault && password == passwordDefault) {
    await sleep(2000);
    return { accessToken: 'oi0323', refreshToken: 'sda02323' };
  }
  throw new Error('email or password incorrect');
};

const signIn = () => {
  console.log('signIn api');
  return;
};

const logout = async () => {
  console.log('logout api');
  return;
};

const refreshToken = () => {
  console.log('refreshToken api');
  return;
};

export default { login, logout, signIn, refreshToken };

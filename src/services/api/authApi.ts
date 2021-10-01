// import axiosClient from '../axiosClient';
import {
  SignInPayload,
  SignUpPayload,
  Token,
  User,
} from '../../models/authType';

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const signIn = async ({ email, password }: SignInPayload): Promise<Token> => {
  const emailDefault = 'vanhoinguyen98@gmail.com';
  const passwordDefault = 'nguyenvanhoi98';
  await sleep(2000);
  if (email == emailDefault && password == passwordDefault) {
    return { accessToken: 'oi0323', refreshToken: 'sda02323' };
  }
  throw new Error('email or password incorrect');
};

const signUp = async (payload: SignUpPayload): Promise<User> => {
  console.log('🚀 ~ payload - sign up: ', payload);
  await sleep(2000);
  return {
    id: 1,
    name: 'Hoi',
    email: 'vanhoi@gmail.com',
  };
};

const signOut = async () => {
  await sleep(2000);
  return;
};

const refreshToken = () => {
  console.log('refreshToken api');
  return;
};

export default { signIn, signOut, signUp, refreshToken };

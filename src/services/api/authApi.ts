import auth from '@react-native-firebase/auth';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../../models/authType';

const signIn = async (payload: SignInRequest): Promise<SignInResponse> => {
  try {
    const result = await auth().signInWithEmailAndPassword(
      payload.email,
      payload.password,
    );
    const accessToken = await result.user.getIdToken();
    return {
      accessToken,
      currentUser: {
        email: result.user.email,
        displayName: result.user.displayName,
      },
    };
  } catch (error: any) {
    const message = error.message || 'Email or password incorrect';
    throw new Error(message);
  }
};

const signUp = async (payload: SignUpRequest): Promise<SignUpResponse> => {
  try {
    const result = await auth().createUserWithEmailAndPassword(
      payload.email,
      payload.password,
    );
    await result.user.updateProfile({
      displayName: payload.displayName,
      photoURL: null,
    });

    const accessToken = await result.user.getIdToken();

    return {
      accessToken,
      currentUser: {
        email: payload.email,
        displayName: payload.displayName,
      },
    };
  } catch (error: any) {
    const message = error.message || 'Email or password incorrect';
    throw new Error(message);
  }
};

const signOut = async (): Promise<any> => {
  return await auth().signOut();
};

const resetPassword = async (email: string): Promise<any> => {
  return await auth().sendPasswordResetEmail(email);
};

export default { signIn, signOut, signUp, resetPassword };

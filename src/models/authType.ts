import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface UserFirebaseAuth extends FirebaseAuthTypes.User {}
export interface UserCredentialFirebaseAuth
  extends FirebaseAuthTypes.UserCredential {}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  displayName: string;
}

export interface AuthState {
  isLoading: boolean;
  isLogged: boolean;
  currentUser?: User | null;
  accessToken?: string;
  refreshToken?: string;
}
export interface User {
  email?: string | null;
  displayName?: string | null;
}

export interface SignInResponse {
  refreshToken?: string;
  accessToken: string;
  currentUser: User | null;
}

export interface SignUpResponse extends SignInResponse {}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id?: string | number;
  name?: string;
  email?: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  displayName: string;
}

export interface AuthState {
  isLoading: boolean;
  isLogged: boolean;
  accessToken: string | undefined;
  refreshToken?: string | undefined;
  currentUser?: User;
}

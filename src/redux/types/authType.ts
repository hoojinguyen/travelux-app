export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
export interface AuthState {
  isLoading: boolean;
  isLogged: boolean;
  accessToken: string;
  refreshToken?: string;
  currentUser?: User;
  errorMessage?: string;
}

import { SignInRequest, SignUpRequest } from './authType';

export interface SignInFormValues extends SignInRequest {}

export interface SignUpFormValues extends SignUpRequest {
  confirmPassword: string;
}

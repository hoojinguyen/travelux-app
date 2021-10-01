import { SignInPayload, SignUpPayload } from './authType';

export interface SignInFormValues extends SignInPayload {}

export interface SignUpFormValues extends SignUpPayload {
  confirmPassword: string;
}

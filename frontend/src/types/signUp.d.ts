import { SignInForm, SignInSuccess } from './signIn';

export type SignUpForm = SignInForm;

export type SignUpSuccess = SignInSuccess;

export interface SignUpError {
  details: string;
}

import { SignInForm, SignInSuccess } from '../types/signIn';
import api from './api';

export const postSignIn = ({ email, password }: SignInForm) =>
  api.post<SignInSuccess>('/users/login', { email, password });

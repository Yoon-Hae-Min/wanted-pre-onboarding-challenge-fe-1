import { SignInForm, SignInSuccess } from '../types/signIn';
import api from './api';

export const postSignIn = ({ email, password }: SignInForm): Promise<SignInSuccess> =>
  api.post('/users/login', { email, password });

import { AxiosResponse } from 'axios';
import { SignInForm, SignInSuccess } from '../types/signIn';
import api from './api';

export const postSignIn = ({ email, password }: SignInForm): Promise<AxiosResponse<SignInSuccess>> =>
  api.post('/users/login', { email, password });

import { SignUpForm, SignUpSuccess } from '../types/signUp';
import api from './api';

export const postSignUp = ({ email, password }: SignUpForm) =>
  api.post<SignUpSuccess>('/users/create', { email, password });

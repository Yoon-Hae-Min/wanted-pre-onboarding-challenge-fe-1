export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInSuccess {
  message: string;
  token: string;
}

export interface SignInError {
  details: string;
}

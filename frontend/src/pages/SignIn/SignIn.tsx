import React, { FormEvent } from 'react';
import Board from '../../components/Common/Board/Board';
import * as Style from './SignIn.styles';
import Button from '../../components/Common/Button/Button';
import Input from '../../components/Common/Input/Input';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import useSignInMutation from '../../hooks/SignIn/useSignInMutation';
import { SignInForm } from '../../types/signIn';
import isEmailValidate from '../../utils/isEmailValidate';
import { LOCAL_ERROR } from '../../constants/error';
import isPasswordValidate from '../../utils/isPasswordValidate';
import useError from '../../hooks/useError';
const SignIn = () => {
  const navigate = useNavigate();
  const [{ email, password }, _, handleChange] = useForm<SignInForm>({
    email: '',
    password: '',
  });
  const [isError, setError] = useError({
    email: false,
    password: false,
    signIn: false,
  });
  const { mutate } = useSignInMutation(setError);
  const toSignUpHandle = () => navigate('/signup');
  const isFormValidate = () => {
    return [setError('email', !isEmailValidate(email)), setError('password', !isPasswordValidate(password))];
  };

  const signInSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    !isFormValidate().includes(true) && mutate({ email, password });
  };
  return (
    <Board.Frame width="25rem" height="23.75rem">
      <Board.Body>
        <Style.SignInHeader>
          <Style.SignInTitle>Todo List</Style.SignInTitle>
        </Style.SignInHeader>
        <form onSubmit={signInSubmit}>
          <Style.SignInForm>
            <Input
              title="이메일"
              placeholder="이메일을 입력하세요"
              name="email"
              value={email}
              onChange={handleChange}
              errorMessage={isError.email ? LOCAL_ERROR.EMAIL : isError.signIn ? LOCAL_ERROR.SIGN_IN : ''}
            />
            <Input
              title="비밀번호"
              placeholder="비밀번호를 입력하세요"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              errorMessage={isError.password ? LOCAL_ERROR.PASSWORD : isError.signIn ? LOCAL_ERROR.SIGN_IN : ''}
            />
          </Style.SignInForm>
          <Style.SignInFooter>
            <Button type="submit">로그인</Button>
            <Style.ToSignUpButton onClick={toSignUpHandle}>회원가입</Style.ToSignUpButton>
          </Style.SignInFooter>
        </form>
      </Board.Body>
    </Board.Frame>
  );
};

export default SignIn;

import React, { FormEvent, useEffect } from 'react';
import Board from '../../components/Common/Board/Board';
import * as Style from './SignIn.styles';
import Button from '../../components/Common/Button/Button';
import Input from '../../components/Common/Input/Input';
import useForm from '../../hooks/Common/useForm';
import { useNavigate } from 'react-router-dom';
import useSignInMutation from '../../hooks/SignIn/mutations/useSignInMutation';
import emailValidator from '../../utils/emailValidator';
import passwordValidator from '../../utils/passwordValidator';
import { LOCAL_ERROR } from '../../constants/error';
import useError from '../../hooks/Common/useError';
import { PAGE_PATH } from '../../constants/path';

const SignIn = () => {
  const navigate = useNavigate();

  const [{ email, password }, _, handleChange] = useForm({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useError({
    email: '',
    password: '',
  });

  const { mutate, error } = useSignInMutation();

  const toSignUpHandle = () => navigate(PAGE_PATH.SIGN_UP);

  const formValidator = () => {
    const isEmailValidate = emailValidator(email);
    const isPasswordValidate = passwordValidator(password);
    setErrorMessage('email', isEmailValidate ? '' : LOCAL_ERROR.EMAIL);
    setErrorMessage('password', isPasswordValidate ? '' : LOCAL_ERROR.PASSWORD);
    return ![isEmailValidate, isPasswordValidate].includes(false);
  };

  const signInSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formValidator() && mutate({ email, password });
  };

  useEffect(() => {
    error && setErrorMessage('email', LOCAL_ERROR.SIGN_IN);
    error && setErrorMessage('password', LOCAL_ERROR.SIGN_IN);
  }, [error]);

  return (
    <Board.Frame width="25rem">
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
              errorMessage={errorMessage.email}
            />
            <Input
              title="비밀번호"
              placeholder="비밀번호를 입력하세요"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              errorMessage={errorMessage.password}
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

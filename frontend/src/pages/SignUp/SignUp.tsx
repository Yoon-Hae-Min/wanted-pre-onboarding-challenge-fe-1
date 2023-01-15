import React, { FormEvent } from 'react';
import * as Style from './SignUp.styles';
import Board from '../../components/Common/Board/Board';
import Button from '../../components/Common/Button/Button';
import Input from '../../components/Common/Input/Input';
import { useNavigate } from 'react-router-dom';
import useError from '../../hooks/Common/useError';
import useForm from '../../hooks/Common/useForm';
import { LOCAL_ERROR } from '../../constants/error';
import emailValidator from '../../utils/emailValidator';
import passwordValidator from '../../utils/passwordValidator';
import useSignUpMutation from '../../hooks/SignUp/mutations/useSignUpMutation';
import { PAGE_PATH } from '../../constants/path';

const SignUp = () => {
  const navigate = useNavigate();

  const [{ email, password, passwordConfirm }, _, handleChange] = useForm({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [errorMessage, setErrorMessage] = useError({
    email: '',
    password: '',
    passwordMatch: '',
  });

  const { mutate } = useSignUpMutation();
  const toSignInHandle = () => navigate(PAGE_PATH.SIGN_IN);

  const formValidator = () => {
    const isEmailValidate = emailValidator(email);
    const isPasswordValidate = passwordValidator(password);
    const isPasswordMatch = password === passwordConfirm;
    setErrorMessage('email', isEmailValidate ? '' : LOCAL_ERROR.EMAIL);
    setErrorMessage('password', isPasswordValidate ? '' : LOCAL_ERROR.PASSWORD);
    setErrorMessage('passwordMatch', isPasswordMatch ? '' : LOCAL_ERROR.PASSWORD_MATCH);
    return ![isEmailValidate, isPasswordValidate, isPasswordMatch].includes(false);
  };

  const signUpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formValidator() && mutate({ email, password });
  };
  return (
    <Board.Frame width="25rem">
      <Board.Body>
        <Style.SignUpHeader>
          <Style.SignUpTitle>회원가입</Style.SignUpTitle>
        </Style.SignUpHeader>
        <form onSubmit={signUpSubmit}>
          <Style.SignUpForm>
            <Input
              title="이메일"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={handleChange}
              name="email"
              errorMessage={errorMessage.email}
            />
            <Input
              title="비밀번호"
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              errorMessage={errorMessage.password}
            />
            <Input
              title="비밀번호 확인"
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={passwordConfirm}
              onChange={handleChange}
              name="passwordConfirm"
              errorMessage={errorMessage.passwordMatch}
            />
          </Style.SignUpForm>
          <Style.SignUpFooter>
            <Button type="submit">회원가입</Button>
            <Style.ToSignInButton onClick={toSignInHandle}>로그인</Style.ToSignInButton>
          </Style.SignUpFooter>
        </form>
      </Board.Body>
    </Board.Frame>
  );
};

export default SignUp;

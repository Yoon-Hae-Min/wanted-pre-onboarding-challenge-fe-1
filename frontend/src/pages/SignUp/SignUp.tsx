import React, { FormEvent } from 'react';
import * as Style from './SignUp.styles';
import Board from '../../components/Common/Board/Board';
import Button from '../../components/Common/Button/Button';
import Input from '../../components/Common/Input/Input';
import { useNavigate } from 'react-router-dom';
import useError from '../../hooks/useError';
import useForm from '../../hooks/useForm';
import { LOCAL_ERROR } from '../../constants/error';
import isEmailValidate from '../../utils/isEmailValidate';
import isPasswordValidate from '../../utils/isPasswordValidate';
import useSignUpMutation from '../../hooks/SignUp/useSignUpMutation';

const SignUp = () => {
  const navigate = useNavigate();
  const [{ email, password, passwordConfirm: passwordCheck }, _, handleChange] = useForm({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [isError, setError] = useError({
    email: false,
    password: false,
    passwordMatch: false,
  });
  const { mutate } = useSignUpMutation();
  const toSignInHandle = () => navigate('/signin');
  const isFormValidate = () => {
    return [
      setError('email', !isEmailValidate(email)),
      setError('password', !isPasswordValidate(password)),
      setError('passwordMatch', password !== passwordCheck),
    ];
  };

  const signUpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    !isFormValidate().includes(true) && mutate({ email, password });
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
              errorMessage={isError.email ? LOCAL_ERROR.EMAIL : ''}
            />
            <Input
              title="비밀번호"
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              errorMessage={
                isError.password ? LOCAL_ERROR.PASSWORD : isError.passwordMatch ? LOCAL_ERROR.PASSWORD_MATCH : ''
              }
            />
            <Input
              title="비밀번호 확인"
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={passwordCheck}
              onChange={handleChange}
              name="passwordCheck"
              errorMessage={
                isError.password ? LOCAL_ERROR.PASSWORD : isError.passwordMatch ? LOCAL_ERROR.PASSWORD_MATCH : ''
              }
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

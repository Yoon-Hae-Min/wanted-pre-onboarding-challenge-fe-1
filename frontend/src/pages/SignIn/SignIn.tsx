import React from 'react';
import Board from '../../components/Board/Board';
import * as Style from './SignIn.styles';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const SignIn = () => {
  return (
    <Board.Frame width="25rem" height="23.75rem">
      <Board.Body>
        <Style.SignInHeader>
          <Style.SignInTitle>Todo List</Style.SignInTitle>
        </Style.SignInHeader>
        <Style.SignInForm>
          <Input title="이메일" placeholder="이메일을 입력하세요" />
          <Input title="비밀번호" placeholder="비밀번호를 입력하세요" type="password" />
        </Style.SignInForm>
        <Style.SignInFooter>
          <Button>로그인</Button>
          <Style.ToSignUpButton>회원가입</Style.ToSignUpButton>
        </Style.SignInFooter>
      </Board.Body>
    </Board.Frame>
  );
};

export default SignIn;

import React from 'react';
import Board from '../../components/Board/Board';
import * as Style from './SignIn.styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const SignIn = () => {
  return (
    <Board.Frame width="25rem" height="23.75rem">
      <Style.SignInHeader>
        <Style.SignTitle>Todo List</Style.SignTitle>
      </Style.SignInHeader>
      <Style.SignInForm>
        <div>
          <Style.SignInFormTitle>이메일</Style.SignInFormTitle>
          <Input placeholder="이메일을 입력하세요" />
        </div>
        <div>
          <Style.SignInFormTitle>비밀번호</Style.SignInFormTitle>
          <Input placeholder="비밀번호를 입력하세요" type="password" />
        </div>
      </Style.SignInForm>
      <Style.SignInFooter>
        <Button>로그인</Button>
        <Style.ToSignUpButton>회원가입</Style.ToSignUpButton>
      </Style.SignInFooter>
    </Board.Frame>
  );
};

export default SignIn;

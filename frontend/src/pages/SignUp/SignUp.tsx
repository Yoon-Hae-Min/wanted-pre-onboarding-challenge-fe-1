import React from 'react';
import * as Style from './SignUp.styles';
import Board from '../../components/Board/Board';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const SignUp = () => {
  return (
    <Board.Frame width="25rem" height="30rem">
      <Style.SignUpHeader>
        <Style.SignUpTitle>회원가입</Style.SignUpTitle>
      </Style.SignUpHeader>
      <Style.SignUpForm>
        <Input title="이메일" placeholder="이메일을 입력하세요" />
        <Input title="비밀번호" placeholder="비밀번호를 입력하세요" type="password" />
        <Input title="비밀번호 확인" placeholder="비밀번호를 입력하세요" type="password" />
      </Style.SignUpForm>
      <Style.SignUpFooter>
        <Button>회원가입</Button>
        <Style.ToSignInButton>로그인</Style.ToSignInButton>
      </Style.SignUpFooter>
    </Board.Frame>
  );
};

export default SignUp;

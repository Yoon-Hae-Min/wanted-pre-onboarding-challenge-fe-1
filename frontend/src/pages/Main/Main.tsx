import React from 'react';
import Board from '../../components/Common/Board/Board';
import Line from '../../components/Common/Line/Line';
import Button from '../../components/Common/Button/Button';
import Fab from '../../components/Common/Fab/Fab';
import * as Style from './Main.styles';
import CheckBox from '../../components/Common/CheckBox/CheckBox';

const Main = () => {
  return (
    <Board.Frame width="45rem" height="57rem">
      <Board.Header height="4.875rem">Todo List</Board.Header>
      <Board.Body>
        <Style.BodyLayout>
          <Style.TodoList>
            <CheckBox id="1234">asdasdasd</CheckBox>
            <CheckBox id="12345">asdasdasd</CheckBox>
            <CheckBox id="12346">asdasdasd</CheckBox>
            <CheckBox id="12347">asdasdasd</CheckBox>
            <CheckBox id="12348">asdasdasd</CheckBox>
            <Style.FabWrapper>
              <Fab />
            </Style.FabWrapper>
          </Style.TodoList>
          <Line align="horizontal" height="52.125rem" left="40%" />
          <Style.Article>
            <Style.ArticleTitle>Doit1</Style.ArticleTitle>
            <Style.ArticleContent>내용</Style.ArticleContent>
            <Style.ButtonWrapper>
              <Button color="primary">수정</Button>
              <Button color="warning">삭제</Button>
            </Style.ButtonWrapper>
          </Style.Article>
        </Style.BodyLayout>
      </Board.Body>
    </Board.Frame>
  );
};

export default Main;

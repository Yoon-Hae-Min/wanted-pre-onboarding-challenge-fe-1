import React, { useState } from 'react';
import Board from '../../components/Common/Board/Board';
import Line from '../../components/Common/Line/Line';
import Input from '../../components/Common/Input/Input';
import Button from '../../components/Common/Button/Button';
import Fab from '../../components/Common/Fab/Fab';
import CheckBox from '../../components/Common/CheckBox/CheckBox';
import Modal from '../../components/Main/Modal/Modal';
import TextArea from '../../components/Main/TextArea/TextArea';
import * as Style from './Main.styles';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((pre) => !pre);
  };

  return (
    <>
      <Modal.Frame isOpen={isOpen}>
        <Modal.Header height="3rem">Todo 작성하기</Modal.Header>
        <Modal.Body>
          <Style.FormLayout>
            <Input placeholder="제목을 입력해 주세요" title="제목" width="100%" />
            <TextArea placeholder="내용을 입력해 주세요" title="본문" rows={3} />
          </Style.FormLayout>
        </Modal.Body>
        <Modal.Footer>
          <Button>작성하기</Button>
        </Modal.Footer>
      </Modal.Frame>
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
                <Fab onClick={onClick} />
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
    </>
  );
};

export default Main;

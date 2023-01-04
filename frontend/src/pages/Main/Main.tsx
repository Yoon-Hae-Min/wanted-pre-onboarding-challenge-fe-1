import React, { useState } from 'react';
import Board from '../../components/Common/Board/Board';
import Line from '../../components/Common/Line/Line';
import Button from '../../components/Common/Button/Button';
import Fab from '../../components/Common/Fab/Fab';
import CheckBox from '../../components/Common/CheckBox/CheckBox';
import PostModal from '../../components/Main/PostModal/PostModal';
import * as Style from './Main.styles';
import useTodosQuery from '../../hooks/Main/useTodosQuery';
// import useTodoMutation from '../../hooks/Main/useTodoMutation';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((pre) => !pre);
  };
  const { data: todos } = useTodosQuery();
  // const { mutate: handleCreateTodo } = useTodoMutation();
  console.log(todos);
  return (
    <>
      <PostModal isOpen={isOpen} mutate={() => {}} />
      <Board.Frame width="45rem" height="57rem">
        <Board.Header height="4.875rem">Todo List</Board.Header>
        <Board.Body>
          <Style.BodyLayout>
            <Style.TodoList>
              <>
                {todos?.data.data.map((todo) => {
                  <CheckBox id={todo.id}>{todo.title}</CheckBox>;
                })}
                <Style.FabWrapper>
                  <Fab onClick={onClick} />
                </Style.FabWrapper>
              </>
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

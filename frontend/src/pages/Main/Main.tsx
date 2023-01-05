import React, { useState } from 'react';
import Board from '../../components/Common/Board/Board';
import Line from '../../components/Common/Line/Line';
import Button from '../../components/Common/Button/Button';
import Fab from '../../components/Common/Fab/Fab';
import CheckBox from '../../components/Common/CheckBox/CheckBox';
import PostModal from '../../components/Main/PostModal/PostModal';
import * as Style from './Main.styles';
import useTodosQuery from '../../hooks/Main/useTodosQuery';
import useTodoMutation from '../../hooks/Main/useTodoMutation';
import useTodoQuery from '../../hooks/Main/useTodoQuery';
import { useNavigate, useParams } from 'react-router-dom';
import useTodoDeleteMutation from '../../hooks/Main/useTodoDeleteMutation';

const Main = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const { data: todos } = useTodosQuery();
  const { data: todo } = useTodoQuery(id);
  const { mutate: handleCreateTodo } = useTodoMutation();
  const { mutate: handleDeleteTodo } = useTodoDeleteMutation();

  const handleModal = () => setIsOpen((pre) => !pre);
  const handleTodoDetail = (id: string) => navigate(`/${id}`);

  return (
    <>
      <PostModal isOpen={isOpen} onClick={handleModal} mutate={handleCreateTodo} />
      <Board.Frame width="45rem" height="57rem">
        <Board.Header height="4.875rem">Todo List</Board.Header>
        <Board.Body>
          <Style.BodyLayout>
            <Style.TodoList>
              <>
                {todos?.data.data.map((todo) => (
                  <CheckBox
                    key={todo.id}
                    id={todo.id}
                    onLabelClick={() => {
                      handleTodoDetail(todo.id);
                    }}
                  >
                    {todo.title}
                  </CheckBox>
                ))}
                <Style.FabWrapper>
                  <Fab onClick={handleModal} />
                </Style.FabWrapper>
              </>
            </Style.TodoList>
            <Line align="horizontal" height="52.125rem" left="40%" />
            <Style.Article>
              <Style.ArticleTitle>{todo?.data.data.title}</Style.ArticleTitle>
              <Style.ArticleContent>{todo?.data.data.content}</Style.ArticleContent>
              <Style.ButtonWrapper>
                {todo && <Button color="primary">수정</Button>}
                {todo && (
                  <Button color="warning" onClick={() => handleDeleteTodo(todo.data.data.id)}>
                    삭제
                  </Button>
                )}
              </Style.ButtonWrapper>
            </Style.Article>
          </Style.BodyLayout>
        </Board.Body>
      </Board.Frame>
    </>
  );
};

export default Main;

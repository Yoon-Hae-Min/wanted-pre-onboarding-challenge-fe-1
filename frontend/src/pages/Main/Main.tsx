import React, { useState } from 'react';
import Board from '../../components/Common/Board/Board';
import Line from '../../components/Common/Line/Line';
import Button from '../../components/Common/Button/Button';
import Fab from '../../components/Common/Fab/Fab';
import CheckBox from '../../components/Common/CheckBox/CheckBox';
import PostModal from '../../components/Main/PostModal/PostModal';
import * as Style from './Main.styles';
import useTodosQuery from '../../hooks/Main/mutations/useTodosQuery';
import useTodoMutation from '../../hooks/Main/mutations/useTodoMutation';
import useTodoQuery from '../../hooks/Main/queries/useTodoQuery';
import { useParams } from 'react-router-dom';
import useTodoDeleteMutation from '../../hooks/Main/mutations/useTodoDeleteMutation';
import useTodoUpdateMutation from '../../hooks/Main/mutations/useTodoUpdateMutation';
import NavigationBar from '../../components/Main/NavigationBar/NavigationBar';
import { PAGE_PATH } from '../../constants/path';
import { Link } from 'react-router-dom';

const Main = () => {
  const { id } = useParams();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isModifyOpen, setIsModifyOpen] = useState(false);

  const { data: todos } = useTodosQuery();
  const { data: todo } = useTodoQuery(id);

  const { mutate: createTodoMutate } = useTodoMutation();
  const { mutate: deleteTodoMutate } = useTodoDeleteMutation();
  const { mutate: updateTodoMutate } = useTodoUpdateMutation();

  const handleCreateModal = () => setIsCreateOpen((pre) => !pre);
  const handleModifyModal = () => setIsModifyOpen((pre) => !pre);

  const handleDeleteTodo = (id: string) => confirm('삭제 하시겠습니까?') && deleteTodoMutate(id);
  return (
    <>
      <PostModal isOpen={isCreateOpen} handleClose={handleCreateModal} mutate={createTodoMutate} />
      {todo && (
        <PostModal
          isOpen={isModifyOpen}
          handleClose={handleModifyModal}
          mutate={({ title, content }) => updateTodoMutate({ title, content, id: todo.data.data.id })}
          initialState={todo.data.data}
        />
      )}
      <Board.Frame width="45rem" height="100%">
        <Board.Header height="5%">Todo List</Board.Header>
        <Board.Body height="95%">
          <NavigationBar />
          <Style.TodoList>
            {todos?.data.data.map((todo) => (
              <CheckBox key={todo.id} id={todo.id}>
                <Link to={PAGE_PATH.TODO_DETAIL(todo.id)}>{todo.title}</Link>
              </CheckBox>
            ))}
            <Style.FabWrapper>
              <Fab onClick={handleCreateModal} />
            </Style.FabWrapper>
          </Style.TodoList>
          <Line align="horizontal" height="100%" left="40%" />
          <Style.Article>
            <Style.ArticleTitle>{todo?.data.data.title}</Style.ArticleTitle>
            <Style.ArticleContent>{todo?.data.data.content}</Style.ArticleContent>
            <Style.ButtonWrapper>
              {todo && (
                <Button color="primary" onClick={handleModifyModal}>
                  수정
                </Button>
              )}
              {todo && (
                <Button color="warning" onClick={() => handleDeleteTodo(todo.data.data.id)}>
                  삭제
                </Button>
              )}
            </Style.ButtonWrapper>
          </Style.Article>
        </Board.Body>
      </Board.Frame>
    </>
  );
};

export default Main;

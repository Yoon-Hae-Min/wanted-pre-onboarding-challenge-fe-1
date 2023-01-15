import React, { FC, FormEvent, useCallback, useEffect } from 'react';
import Modal from '../Modal/Modal';
import TextArea from '../TextArea/TextArea';
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import useForm from '../../../hooks/Common/useForm';
import useError from '../../../hooks/Common/useError';
import { TodoCreateSuccess, TodoForm, TodoUpdateSuccess, TodosReadSuccess } from '../../../types/main';
import { LOCAL_ERROR } from '../../../constants/error';
import isEmptyText from '../../../utils/isEmptyText';
import * as Style from './PostModal.styles';
import { UseMutateFunction } from 'react-query/types/react';
import { AxiosResponse } from 'axios';

interface PostModalProps {
  isOpen: boolean;
  handleClose: () => void;
  mutate: UseMutateFunction<
    AxiosResponse<TodoCreateSuccess | TodoUpdateSuccess>,
    unknown,
    TodoForm,
    {
      previousTodos: AxiosResponse<TodosReadSuccess> | undefined;
    }
  >;
  initialState?: TodoForm;
}

const PostModal: FC<PostModalProps> = ({ isOpen, handleClose, mutate, initialState }) => {
  const [{ title, content }, _, handleChange, setState] = useForm(initialState ?? { title: '', content: '' });
  const [isError, setError] = useError({
    title: false,
    content: false,
  });

  const isFormValidate = useCallback(() => {
    return [setError('title', isEmptyText(title)), setError('content', isEmptyText(content))];
  }, [title, content]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!isFormValidate().includes(true)) {
        mutate({ title, content });
        handleClose();
      }
    },
    [title, content]
  );
  useEffect(() => {
    initialState && setState(initialState);
  }, [initialState]);

  return (
    <Modal.Frame isOpen={isOpen} onClick={handleClose}>
      <Modal.Header height="3rem">Todo 작성하기</Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Style.FormLayout>
            <Input
              placeholder="제목을 입력해 주세요"
              title="제목"
              width="100%"
              name="title"
              value={title}
              onChange={handleChange}
              errorMessage={isError.title ? LOCAL_ERROR.EMPTY : ''}
            />
            <TextArea
              placeholder="내용을 입력해 주세요"
              title="본문"
              rows={3}
              name="content"
              value={content}
              onChange={handleChange}
              errorMessage={isError.content ? LOCAL_ERROR.EMPTY : ''}
            />
          </Style.FormLayout>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">작성하기</Button>
        </Modal.Footer>
      </form>
    </Modal.Frame>
  );
};

export default PostModal;

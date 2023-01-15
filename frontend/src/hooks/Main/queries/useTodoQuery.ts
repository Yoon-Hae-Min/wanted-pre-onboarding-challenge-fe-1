import { useQuery } from 'react-query';
import { getTodo } from '../../../api/main';
import { TodoError, TodoReadSuccess } from '../../../types/main';
import { AxiosError, AxiosResponse } from 'axios';

const useTodoQuery = (id: string | undefined) =>
  useQuery<AxiosResponse<TodoReadSuccess>, AxiosError<TodoError>>(['todo', id], getTodo, {
    enabled: !!id,
  });

export default useTodoQuery;

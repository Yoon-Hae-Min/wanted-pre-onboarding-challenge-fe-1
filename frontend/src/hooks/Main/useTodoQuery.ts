import { useQuery } from 'react-query';
import { getTodo } from '../../api/main';
import { TodoError, TodoSuccess } from '../../types/main';
import { AxiosError, AxiosResponse } from 'axios';

const useTodoQuery = (id: string | undefined) =>
  useQuery<AxiosResponse<TodoSuccess>, AxiosError<TodoError>>(['Todo', id], getTodo, {
    enabled: !!id,
  });

export default useTodoQuery;

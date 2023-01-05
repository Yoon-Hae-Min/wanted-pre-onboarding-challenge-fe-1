import { useQuery } from 'react-query';
import { getTodos } from '../../api/main';
import { AxiosResponse, AxiosError } from 'axios';
import { TodoError, TodosSuccess } from '../../types/main';

const useTodosQuery = () => useQuery<AxiosResponse<TodosSuccess>, AxiosError<TodoError>>(['todos'], getTodos);

export default useTodosQuery;

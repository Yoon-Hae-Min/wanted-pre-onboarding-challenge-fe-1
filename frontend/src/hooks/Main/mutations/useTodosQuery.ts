import { useQuery } from 'react-query';
import { getTodos } from '../../../api/main';
import { AxiosResponse, AxiosError } from 'axios';
import { TodoError, TodosReadSuccess } from '../../../types/main';

const useTodosQuery = () => useQuery<AxiosResponse<TodosReadSuccess>, AxiosError<TodoError>>(['todos'], getTodos);

export default useTodosQuery;

import { useQuery } from 'react-query';
import { getTodos } from '../../api/main';
import { AxiosResponse, AxiosError } from 'axios';
import { TodoError, TodoSuccess } from '../../types/main';

const useTodosQuery = () => useQuery<AxiosResponse<TodoSuccess>, AxiosError<TodoError>>(['todos'], getTodos);

export default useTodosQuery;

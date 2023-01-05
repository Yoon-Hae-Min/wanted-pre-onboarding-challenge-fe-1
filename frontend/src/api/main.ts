import { AxiosResponse } from 'axios';
import { Todo, TodoDeleteSuccess, TodoForm, TodosSuccess, TodoSuccess } from '../types/main';
import api from './api';

export const postTodo = ({ title, content }: TodoForm): Promise<AxiosResponse<Todo>> =>
  api.post('/todos', { title, content });

export const getTodos = (): Promise<AxiosResponse<TodosSuccess>> => api.get('/todos');

export const getTodo = ({ queryKey }): Promise<AxiosResponse<TodoSuccess>> => {
  const [, id] = queryKey;
  return api.get(`todos/${id}`);
};

export const deleteTodo = (id: string): Promise<AxiosResponse<TodoDeleteSuccess>> => api.delete(`todos/${id}`);

import { AxiosResponse } from 'axios';
import {
  Todo,
  TodoCreateSuccess,
  TodoDeleteSuccess,
  TodoForm,
  TodoReadSuccess,
  TodosReadSuccess,
  TodoUpdateSuccess,
} from '../types/main';
import api from './api';

export const postTodo = ({ title, content }: TodoForm): Promise<AxiosResponse<TodoCreateSuccess>> =>
  api.post('/todos', { title, content });

export const getTodos = (): Promise<AxiosResponse<TodosReadSuccess>> => api.get('/todos');

export const getTodo = ({ queryKey }): Promise<AxiosResponse<TodoReadSuccess>> => {
  const [, id] = queryKey;
  return api.get(`todos/${id}`);
};

export const deleteTodo = (id: string): Promise<AxiosResponse<TodoDeleteSuccess>> => api.delete(`todos/${id}`);

export const updateTodo = ({ title, content, id }: Todo): Promise<AxiosResponse<TodoUpdateSuccess>> =>
  api.put(`todos/${id}`, { title, content });

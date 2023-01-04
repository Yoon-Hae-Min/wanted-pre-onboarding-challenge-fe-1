import { AxiosResponse } from 'axios';
import { Todo, TodoForm, TodoSuccess } from '../types/main';
import api from './api';

export const postTodo = ({ title, content }: TodoForm): Promise<AxiosResponse<Todo>> =>
  api.post('/todos', { title, content });

export const getTodos = (): Promise<AxiosResponse<TodoSuccess>> => api.get('/todos');

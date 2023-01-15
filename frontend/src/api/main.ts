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

export const postTodo = ({ title, content }: TodoForm) => api.post<TodoCreateSuccess>('/todos', { title, content });

export const getTodos = () => api.get<TodosReadSuccess>('/todos');

export const getTodo = ({ queryKey }) => {
  const [, id] = queryKey;
  return api.get<TodoReadSuccess>(`todos/${id}`);
};

export const deleteTodo = (id: string) => api.delete<TodoDeleteSuccess>(`todos/${id}`);

export const updateTodo = ({ title, content, id }: Todo) =>
  api.put<TodoUpdateSuccess>(`todos/${id}`, { title, content });

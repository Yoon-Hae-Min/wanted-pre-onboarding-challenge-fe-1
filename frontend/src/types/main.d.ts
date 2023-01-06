export type TodoForm = Pick<Todo, 'title' | 'content'>;

export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TodoError {
  details: string;
}

export interface TodosReadSuccess {
  data: Todo[];
}
export type TodoCreateSuccess = {
  data: Todo;
};
export type TodoReadSuccess = TodoCreateSuccess;
export type TodoUpdateSuccess = TodoCreateSuccess;
export interface TodoDeleteSuccess {
  data: null;
}

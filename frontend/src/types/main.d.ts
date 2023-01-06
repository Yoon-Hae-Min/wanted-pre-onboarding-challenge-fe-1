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

export interface TodosSuccess {
  data: Todo[];
}
export interface TodoSuccess {
  data: Todo;
}
export interface TodoDeleteSuccess {
  data: null;
}

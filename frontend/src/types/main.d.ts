export interface TodoForm {
  title: string;
  content: string;
}

export interface Todo extends TodoForm {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoError {
  details: string;
}

export interface TodoSuccess {
  data: Todo[];
}
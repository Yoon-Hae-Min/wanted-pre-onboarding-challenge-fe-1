import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../../api/main';
import { AxiosResponse } from 'axios';
import { Todo, TodoReadSuccess, TodosReadSuccess } from '../../types/main';

const useTodoUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onMutate: async (newTodo: Todo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      await queryClient.cancelQueries({ queryKey: ['todo', newTodo.id] });
      const previousTodo = queryClient.getQueryData<AxiosResponse<TodoReadSuccess>>(['todo', newTodo.id]);
      const previousTodos = queryClient.getQueryData<AxiosResponse<TodosReadSuccess>>(['todos']);
      if (previousTodo && previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodoReadSuccess>>(['todo', newTodo.id], {
          ...previousTodo,
          data: {
            data: newTodo,
          },
        });
        queryClient.setQueryData<AxiosResponse<TodosReadSuccess>>(['todos'], {
          ...previousTodos,
          data: {
            data: previousTodos.data.data.map((todo) => (todo.id === newTodo.id ? newTodo : todo)),
          },
        });
      }
      return { previousTodo, previousTodos };
    },
    onError: (err, newTodo, context) => {
      if (context?.previousTodo) {
        queryClient.setQueryData<AxiosResponse<TodoReadSuccess>>(['todo', newTodo.id], context.previousTodo);
      }
      if (context?.previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosReadSuccess>>(['todos'], context.previousTodos);
      }
    },
    onSettled: (data, error, newTodo) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.invalidateQueries({ queryKey: ['todo', data?.data.data.id] });
    },
  });
};

export default useTodoUpdateMutation;

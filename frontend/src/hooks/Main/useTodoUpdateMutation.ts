import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../../api/main';
import { AxiosResponse } from 'axios';
import { Todo, TodoSuccess, TodosSuccess } from '../../types/main';

const useTodoUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onMutate: async (newTodo: Todo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      await queryClient.cancelQueries({ queryKey: ['todo', newTodo.id] });
      const previousTodo = queryClient.getQueryData<AxiosResponse<TodoSuccess>>(['todo', newTodo.id]);
      const previousTodos = queryClient.getQueryData<AxiosResponse<TodosSuccess>>(['todos']);
      if (previousTodo && previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodoSuccess>>(['todo', newTodo.id], {
          ...previousTodo,
          data: {
            data: newTodo,
          },
        });
        queryClient.setQueryData<AxiosResponse<TodosSuccess>>(['todos'], {
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
        queryClient.setQueryData<AxiosResponse<TodoSuccess>>(['todo', newTodo.id], context.previousTodo);
      }
      if (context?.previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosSuccess>>(['todos'], context.previousTodos);
      }
    },
    onSettled: (data, error, newTodo) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.invalidateQueries({ queryKey: ['todo', data?.data.data.id] });
    },
  });
};

export default useTodoUpdateMutation;

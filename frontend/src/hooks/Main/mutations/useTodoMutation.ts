import { useMutation, useQueryClient } from 'react-query';
import { TodoForm, TodosReadSuccess } from '../../../types/main';
import { postTodo } from '../../../api/main';
import { AxiosResponse } from 'axios';
const useTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postTodo, {
    onMutate: async (newTodo: TodoForm) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData<AxiosResponse<TodosReadSuccess>>(['todos']);
      if (previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosReadSuccess>>(['todos'], {
          ...previousTodos,
          data: {
            data: [
              ...previousTodos.data.data,
              { ...newTodo, id: 'loading', createdAt: Date.now().toString(), updatedAt: Date.now().toString() },
            ],
          },
        });
      }
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosReadSuccess>>(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export default useTodoMutation;

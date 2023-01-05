import { useMutation, useQueryClient } from 'react-query';
import { TodoForm, TodosSuccess } from '../../types/main';
import { postTodo } from '../../api/main';
import { AxiosResponse } from 'axios';
const useTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postTodo, {
    onMutate: async (newTodo: TodoForm) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData<AxiosResponse<TodosSuccess>>(['todos']);
      if (previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosSuccess>>(['todos'], {
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
        queryClient.setQueryData<AxiosResponse<TodosSuccess>>(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export default useTodoMutation;

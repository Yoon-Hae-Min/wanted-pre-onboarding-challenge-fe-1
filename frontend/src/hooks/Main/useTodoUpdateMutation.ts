import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../../api/main';
import { AxiosResponse } from 'axios';
import { Todo, TodoSuccess } from '../../types/main';

const useTodoUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateTodo, {
    onMutate: async (newTodo: Todo) => {
      console.log(newTodo);
      await queryClient.cancelQueries({ queryKey: ['todo', newTodo.id] });
      const previousTodos = queryClient.getQueryData<AxiosResponse<TodoSuccess>>(['todo', newTodo.id]);
      if (previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodoSuccess>>(['todo', newTodo.id], {
          ...previousTodos,
          data: {
            data: newTodo,
          },
        });
      }
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodoSuccess>>(['todo', newTodo.id], context.previousTodos);
      }
    },
    onSettled: (data, error, newTodo) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.invalidateQueries({ queryKey: ['todo', data?.data.data.id] });
    },
  });
};

export default useTodoUpdateMutation;

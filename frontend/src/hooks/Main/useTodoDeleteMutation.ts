import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo } from '../../api/main';
import { TodosReadSuccess } from '../../types/main';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const useTodoDeleteMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(deleteTodo, {
    onMutate: async (targetId) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData<AxiosResponse<TodosReadSuccess>>(['todos']);
      if (previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosReadSuccess>>(['todos'], {
          ...previousTodos,
          data: {
            data: [...previousTodos.data.data.filter((todo) => todo.id !== targetId)],
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
    onSuccess: () => {
      navigate('/');
    },
  });
};

export default useTodoDeleteMutation;
